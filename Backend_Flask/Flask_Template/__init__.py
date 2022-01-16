from flask import Flask
from App.settings import envs
from App.views import init_blue


def create_app(env):
    app = Flask(__name__, static_folder='../static', template_folder='../templates')

    # settings
    app.config.from_object(envs.get(env))

    # load extensions
    # init_exts(app)

    # initialize url
    init_blue(app)

    return app
