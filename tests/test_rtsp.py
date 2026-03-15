import argparse
import json
import logging
import subprocess

from unifi.cams.rtsp import RTSPCam


class DummySSLContext:
    def __init__(self):
        self.check_hostname = True
        self.verify_mode = None

    def load_cert_chain(self, *_args, **_kwargs):
        return None


def build_args():
    return argparse.Namespace(
        cert="/tmp/client.pem",
        ffmpeg_args="-c copy",
        ffmpeg_base_args=None,
        rtsp_transport="tcp",
        timestamp_modifier=90,
        loglevel="error",
        format="flv",
        token="token",
        mac="AA:BB:CC:DD:EE:FF",
        host="protect.example",
        fw_version="test",
        ip="192.0.2.10",
        model="UVC G3",
        name="camera",
        source=[
            "rtsp://example.invalid/high",
            "rtsp://example.invalid/medium",
            "rtsp://example.invalid/low",
        ],
        http_api=0,
        snapshot_url="http://example.invalid/snapshot.jpg",
    )


def test_rtsp_cam_probes_dimensions_per_stream(monkeypatch):
    monkeypatch.setattr("ssl.create_default_context", lambda: DummySSLContext())

    calls = []

    def fake_check_output(cmd):
        source = cmd[-1]
        calls.append(source)
        dimensions = {
            "rtsp://example.invalid/high": {"width": 1280, "height": 960},
            "rtsp://example.invalid/medium": {"width": 640, "height": 480},
            "rtsp://example.invalid/low": {"width": 352, "height": 240},
        }[source]
        return json.dumps({"streams": [dimensions]}).encode()

    monkeypatch.setattr(subprocess, "check_output", fake_check_output)

    cam = RTSPCam(build_args(), logging.getLogger("test"))

    assert cam.get_stream_dimensions("video1") == {"width": 1280, "height": 960}
    assert cam.get_stream_dimensions("video2") == {"width": 640, "height": 480}
    assert cam.get_stream_dimensions("video3") == {"width": 352, "height": 240}
    assert cam.get_stream_dimensions("mjpg") == {"width": 1280, "height": 960}
    assert calls == [
        "rtsp://example.invalid/high",
        "rtsp://example.invalid/medium",
        "rtsp://example.invalid/low",
    ]


def test_rtsp_cam_dimension_probe_falls_back_to_defaults(monkeypatch):
    monkeypatch.setattr("ssl.create_default_context", lambda: DummySSLContext())

    def fake_check_output(_cmd):
        raise subprocess.CalledProcessError(returncode=1, cmd="ffprobe")

    monkeypatch.setattr(subprocess, "check_output", fake_check_output)

    cam = RTSPCam(build_args(), logging.getLogger("test"))

    assert cam.get_stream_dimensions("video1") == {"width": 1920, "height": 1080}
    assert cam.get_stream_dimensions("video2") == {"width": 1280, "height": 720}
    assert cam.get_stream_dimensions("video3") == {"width": 640, "height": 360}
