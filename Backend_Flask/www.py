from flask import Flask, jsonify, render_template, request
from flask_restful import Api
from flask_cors import CORS
from Backend_Flask.APIs import handler1, handler2
from contextlib import closing
import sqlite3
from flask import g
from flask_cors import CORS
from flask import Flask, jsonify, render_template, request
import sys
sys.path.append("Backend_Flask/")

# Initialize Flask
app = Flask(__name__, static_folder='../Frontend_Vue',
            template_folder='../Frontend_Vue', static_url_path="")
api = Api(app)

# Cross Domain
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# database
DATABASE = 'Backend_Flask/DB/testDB.db'
# 初始化模式: 只需使用一次


def init_db():
    with closing(connect_db()) as db:
        with app.open_resource('Backend_Flask/DB/schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()
    # with app.app_context():
    #     db = connect_db()
    #     with app.open_resource('schema.sql', mode='r') as f:
    #         db.cursor().executescript(f.read())
    #     db.commit()

# 连接库


def connect_db():
    return sqlite3.connect(DATABASE)


@app.before_request
def before_request():
    g.db = connect_db()


@app.teardown_request
def teardown_request(exception):
    if hasattr(g, 'db'):
        g.db.close()

# 插入


def insert(id, testvalue):
    sql = "insert into test values (?, ?)"
    conn = g.db
    cursor = conn.cursor()
    try:
        cursor.execute(sql, (id, testvalue))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise TypeError("insert error:{}".format(e))

# 查询


def query_db(query, args=(), one=False):
    cur = g.db.execute(query, args)
    rv = [dict((cur.description[idx][0], value)
               for idx, value in enumerate(row)) for row in cur.fetchall()]
    return (rv[0] if rv else None) if one else rv
# 多个结果使用
# for user in query_db('select * from users'):
# 单个结果使用
# user = query_db('select * from users where username = ?',[the_username], one=True)

# Basic Route


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        key = request.args.get('key', '')
        return render_template('index.html', data=key)


# RESTful API Route
# handler1
api.add_resource(handler1.jsonAPI, '/api/<key>')

# handler2
api.add_resource(handler2.jsonAPI2, '/api/')
