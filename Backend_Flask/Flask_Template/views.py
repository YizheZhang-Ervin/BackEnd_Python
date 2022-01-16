from flask import Blueprint, request, render_template

blue = Blueprint('blue', __name__)


def init_blue(app):
    app.register_blueprint(blue)


# index.html
@blue.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')


# hotnews.html
@blue.route('/hotnews/', methods=['GET', 'POST'])
def hotnews():
    if request.method == 'GET':
        return render_template('hotnews.html')


# error handler
# @app.errorhandler(404)
# def page_not_found(error):
#     # use template
#     # return render_template('page_not_found.html'), 404
#     # gain response and change
#     resp = make_response(render_template('error.html'), 404)
#     resp.headers['X-Something'] = 'A value'
#     return resp
