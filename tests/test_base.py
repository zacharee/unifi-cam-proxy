import argparse
import asyncio
import logging

from unifi.cams.base import UnifiCamBase


class DummySSLContext:
    def __init__(self):
        self.check_hostname = True
        self.verify_mode = None

    def load_cert_chain(self, *_args, **_kwargs):
        return None


class DummyCam(UnifiCamBase):
    async def get_snapshot(self):
        raise NotImplementedError

    async def get_stream_source(self, _stream_index: str) -> str:
        return "rtsp://example.invalid/test"


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
    )


def test_process_video_settings_preserves_channel_specific_rtsp_aliases(monkeypatch):
    monkeypatch.setattr("ssl.create_default_context", lambda: DummySSLContext())

    cam = DummyCam(build_args(), logging.getLogger("test"))
    message = {
        "messageId": 42,
        "payload": {
            "video": {
                "video1": {"rtspAlias": "alias-high"},
                "video2": {"rtspAlias": "alias-medium"},
                "video3": {"rtspAlias": "alias-low"},
            }
        },
    }

    response = asyncio.run(cam.process_video_settings(message))
    video = response["payload"]["video"]

    assert video["video1"]["rtspAlias"] == "alias-high"
    assert video["video2"]["rtspAlias"] == "alias-medium"
    assert video["video3"]["rtspAlias"] == "alias-low"
    assert video["video1"]["isRtspEnabled"] is True
    assert video["video2"]["isRtspEnabled"] is True
    assert video["video3"]["isRtspEnabled"] is True


def test_process_video_settings_leaves_rtsp_disabled_without_alias(monkeypatch):
    monkeypatch.setattr("ssl.create_default_context", lambda: DummySSLContext())

    cam = DummyCam(build_args(), logging.getLogger("test"))
    response = asyncio.run(cam.process_video_settings({"messageId": 1, "payload": None}))
    video = response["payload"]["video"]

    assert video["video1"]["rtspAlias"] is None
    assert video["video2"]["rtspAlias"] is None
    assert video["video3"]["rtspAlias"] is None
    assert video["video1"]["isRtspEnabled"] is False
    assert video["video2"]["isRtspEnabled"] is False
    assert video["video3"]["isRtspEnabled"] is False
