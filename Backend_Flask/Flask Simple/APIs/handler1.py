from flask import jsonify
from flask_restful import Resource,reqparse

# parse parameters
parser = reqparse.RequestParser()
parser.add_argument('key', type=str)

# 路由传参
class jsonAPI(Resource):
    # http://127.0.0.1:5000/api/值
    def get(self,key):
        try:
            jsonObj = {"result":key,'function':1}
            return jsonify(jsonObj)
        except Exception:
            return jsonify({"error":"error"})
    
    # http://127.0.0.1:5000/api/值
    # 传{"key":"值"}
    def post(self,key):
        try:
            args = parser.parse_args()
            key = eval(args['key'])
            jsonObj = {"result":key,'function':1}
            return jsonify(jsonObj)
        except Exception:
            return jsonify({"error":"error"})