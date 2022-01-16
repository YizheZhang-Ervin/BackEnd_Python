from flask import jsonify,request
from flask_restful import Resource,reqparse

# parse parameters
parser = reqparse.RequestParser()
parser.add_argument('key', type=str)

# 问号传参
class jsonAPI2(Resource):
    # http://127.0.0.1:5000/api/?pkg=值
    def get(self):
        try:
            pkg = request.args.get("pkg","")
            jsonObj = {"result":pkg,'function':2}
            return jsonify(jsonObj)
        except Exception:
            return jsonify({"error":"error"})
    
    # http://127.0.0.1:5000/api/
    # 传{"key":"值"}
    def post(self):
        try:
            args = parser.parse_args()
            key = eval(args['key'])
            jsonObj = {"result":key,'function':2}
            return jsonify(jsonObj)
        except Exception:
            return jsonify({"error":"error"})
