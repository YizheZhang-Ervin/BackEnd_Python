from gevent import pywsgi
from gevent import monkey

from manage import app
monkey.patch_all()

if __name__ == '__main__':
    gevent_server = pywsgi.WSGIServer(('127.0.0.1', 5000), app)
    gevent_server.serve_forever()
