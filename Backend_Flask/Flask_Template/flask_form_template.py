# WTF form

# WTF fields
from flask import request, flash, render_template
from wtforms import SubmitField, StringField, PasswordField
# WTF validator
from wtforms.validators import DataRequired, EqualTo

from app import app


class RegisterForm:
    a = StringField('a', validators=[DataRequired()])
    input = SubmitField('submit')


@app.route('/form', methods=['GET', 'POST'])
def form():
    # back-end WTF form:
    # code in HTML file
    # <form>
    # {{form.csrf_token()}} <br>
    # {{form.xx.label}} {{form.xx}}<br>
    # {{form.input}}<br>
    # </form>
    register_form = RegisterForm()
    if request.method == 'POST':
        if register_form.validate_on_submit():
            a = request.form.get('a')
            return 'success'
        else:
            flash('error')
    return render_template('xx.html', form=register_form)


@app.route('/form2', methods=['GET', 'POST'])
def form2():
    if request.method == 'POST':
        # common front-end form:
        # gain parameters
        a = request.form.get('a')
        b = request.form.get('b')
        # compare password
        if a != b:
            # flush message, need secret_key, 'u'->encode problem
            flash(u'error')