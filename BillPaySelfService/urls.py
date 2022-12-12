from tornado.web import url
from .extension import BillPaySelfServiceHandler

# url('/regex_pattern', HandlerClass, kwargs=None, name=None)
# http://www.tornadoweb.org/en/stable/web.html?#tornado.web.URLSpec

URL_PATTERNS = [
    url(r"/BillPaySelfService/?", BillPaySelfServiceHandler),
]
