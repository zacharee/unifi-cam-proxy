import sys
import types


def install_stub(name: str, **attrs):
    module = types.ModuleType(name)
    for key, value in attrs.items():
        setattr(module, key, value)
    sys.modules[name] = module
    return module


install_stub("amcrest", AmcrestCamera=object)
install_stub("amcrest.exceptions", CommError=Exception)
install_stub("hikvisionapi", AsyncClient=object)
install_stub("reolinkapi", Camera=object)
install_stub("pytapo", Tapo=object)
websockets_client = install_stub("websockets.client", WebSocketClientProtocol=object)
websockets_exceptions = install_stub(
    "websockets.exceptions", ConnectionClosedError=Exception
)
websockets = install_stub(
    "websockets", client=websockets_client, exceptions=websockets_exceptions
)
websockets.client = websockets_client
websockets.exceptions = websockets_exceptions

aiomqtt = install_stub("aiomqtt", Client=object, Message=object)
aiomqtt_exceptions = install_stub("aiomqtt.exceptions", MqttError=Exception)
aiomqtt.exceptions = aiomqtt_exceptions


def _backoff_decorator(*_args, **_kwargs):
    def decorator(fn):
        return fn

    return decorator


install_stub("backoff", on_predicate=_backoff_decorator, expo=lambda *_args, **_kwargs: None)
