from flask import Blueprint, request, jsonify
from infrastructure.databases.session import get_db_session 
from infrastructure.repositories.user_repository import UserRepository
from services.user_service import UserService
from api.schemas.user_schema import RegisterSchema, LoginSchema

auth_bp = Blueprint("auth", __name__, url_prefix="/api")

@auth_bp.route("/register", methods=["POST"])
def register():
    try:
        data = RegisterSchema().load(request.json)
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)

        service.register(data['user_id'],data['fullname'],data["email"], data["password"], data["role"])
        return jsonify({"message": "Register successful"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

#@auth_bp.route("/login", methods=["POST"])
#def login():
#    try:
#        data = LoginSchema().load(request.json)
#        db = get_db_session()
#        user_repo = UserRepository(db)
#        service = UserService(user_repo)

#        result = service.login(data["email"], data["password"])
#        return jsonify({"message": "Login successful", "user": result})
#    except Exception as e:
#        return jsonify({"error": str(e)}), 401
@auth_bp.route("/login", methods=["GET"])
def login():
    try:
        email = request.args.get("email")
        password = request.args.get("password")

        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)

        result = service.login(email, password)
        return jsonify({"message": "Login successful", "user": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 401