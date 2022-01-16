from html import escape
import click
from flask import Flask, render_template, request, flash, url_for, make_response, jsonify

# flask instance, use __name__ to ensure resource path
from flask.cli import AppGroup, with_appcontext
from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename, redirect

app = Flask(__name__, static_folder='static')
app.config['SECRET_KEY'] = 'versus'
app.config['CSRF_ENABLED'] = True

# method 0: start cmd with parameters not enter context
# @click.command()
# @with_appcontext
# use: app.cli.add_command(main)
# not use: @app.cli.command(with_appcontext=False)

# method 1: start cmd with parameters with group
# user_cli = AppGroup("user")
# @user_cli.command("main_run")
# @click.argument("name")
# cmd: flask user main_run xxname

# method 2: start cmd with parameters with no group
@app.cli.command()
@click.argument("name")
# cmd: flask main xxname
def main(name):
    print(name)

# method 3: formal version of start cmd with parameters
# @click.command()
# @click.option('--mode', default="server", type=click.Choice(["server", "client"]), help="xxx")
# def run(mode):
#     if mode == "server":
#         app.run(host='0.0.0.0', debug=True, port=9965)
#     else:
#         xxfunction()
# if __name__ == '__main__':
#     run()


# url & get/post method
@app.route('/abc/?key=value', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # return 'Hello world!'
        x = request.args.get('key', '')
        return render_template('xx.html', x=x)


# dynamic parameter
@app.route('/xxx/<int:para>')
def second(para):
    if request.method == 'POST':
        # para is default str(unicode) -> but can change to int
        return 'xx %s' % para


# return subpath name
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return 'Subpath %s' % escape(subpath)


# download file
@app.route('/save', methods=['GET', 'POST'])
def second(para):
    if request.method == 'POST':
        f = request.files['the_file']
        f.save('/directory/dir/' + secure_filename(f.filename))


# redirect
@app.route('/')
def index():
    return redirect(url_for('login'))


# raise error
@app.route('/login')
def login():
    abort(401)


@app.errorhandler(404)
def page_not_found(error):
    # use template
    # return render_template('page_not_found.html'), 404
    # gain response and change
    resp = make_response(render_template('error.html'), 404)
    resp.headers['X-Something'] = 'A value'
    return resp


# JSON
@app.route("/me")
def me_api():
    user = '001'
    return {
        "username": user.username,
        "theme": user.theme,
        "image": url_for("user_image", filename=user.image),
    }


# JSON method by jsonify
@app.route("/users")
def users_api():
    users = '002'
    return jsonify([user.to_json() for user in users])


# run app
if __name__ == '__main__':
    app.run()


# variable: {{x}}
# comments: {# xxx #}
# dictionary/list: {{x.val}} or {{x[val]}}
# if: {% if xx %} {% else %} {% endif %}
# for: {% for x in xx %} {% endfor %}
# {{var| filtername(*args)}} eg.safe = Prohibition of escape
# {{'%s is %d' | format('xx',7)}} eg.format = Output with given format
# {{x | reverse | upper}} invoke with chain
# gain flush message from backend: {% for m in get_flashed_messages() %} {% endfor%}
# static files: {{url_for('static', filename='css/style.css')}}
