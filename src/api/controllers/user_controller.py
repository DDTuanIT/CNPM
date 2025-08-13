from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
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

        service.create_user(
            data['user_id'],
            data['user_name'],
            data["user_password"],
            data['address'],
            data["email"],
            data['phone_number'],
            data["role_name"]
        )
        return jsonify({"message": "Register successful"}), 201
    except Exception as e:
        import traceback
        print("Register error traceback:\n", traceback.format_exc())  # In lỗi ra console
        return jsonify({"error": str(e)}), 500



@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = LoginSchema().load(request.json)
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)

        result = service.login(data["user_name"], data["password"])
        return jsonify({"message": "Login successful", "user": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 401
