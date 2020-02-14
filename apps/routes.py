from flask import Flask, render_template, url_for, redirect, request, flash
from werkzeug.security import check_password_hash, generate_password_hash

from apps import app, db
from apps.models import User


@app.route('/index')
@app.route('/')
def hello_world():
    print("\n\n\n test")
    return render_template('index.html')


@app.route('/registration', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        username = request.form.get('username')
        password1 = request.form.get('password')
        password2 = request.form.get('password2')
        if not (username or password1 or password2):
            flash('Please, fill all fields!')
        elif password1 != password2:
            flash('Passwords are not equal!')
        else:
            hash_pwd = generate_password_hash(password1)
            new_user = User(username=username, password=hash_pwd)
            db.session.add(new_user)
            db.session.commit()
            # HttpResponse(json.dumps({
            #         'status': 'ok',
            #     }), status=200, content_type='application/json')
            return redirect(url_for('hello_world'))
    return render_template('register.html')


'''
@app.route('/login', methods=['GET', 'POST'])
def login_page():
    username = request.form.get('username')
    password = request.form.get('password')
    print("\n\n {} {}".format(username, password))
    if username and password:
        user = User.query.filter_by(username=username).first()
        print("\n\n username password \n\n")
        if user and check_password_hash(user.password, password):
            print("\n\n authenticatin")
            login_user(user)
            print("\n\n user is sattisfy \n")
            next_page = request.args.get('next')

            return redirect(next_page)
        else:
            flash('Login or password is not correct')
    else:
        flash('Please fill login and password fields')

    return render_template('login.html')
'''
