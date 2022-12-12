import pytest
from tornado.web import Application

from q2_sdk.tools.testing.models import RequestMock
from q2_sdk.ui.forms import Q2Form
from .. import extension


class MockBillPaySelfServiceHandler(extension.BillPaySelfServiceHandler):
    def __init__(self):
        super().__init__(Application(), RequestMock(), logging_level="INFO")


@pytest.mark.skip(reason="Generated with extension")
async def test_default_route():
    handler = MockBillPaySelfServiceHandler()
    actual = await handler.default()

    assert isinstance(actual, Q2Form)
    assert actual.routing_key == "submit"
    assert actual.hide_submit_button is False


@pytest.mark.skip(reason="Generated with extension")
async def test_submit_route():
    handler = MockBillPaySelfServiceHandler()
    handler.form_fields = {"foo": "bar"}
    actual = await handler.submit()

    assert isinstance(actual, Q2Form)
    assert actual.routing_key == ""
    assert actual.hide_submit_button is True
