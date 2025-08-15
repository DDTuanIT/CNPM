from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.user_repository import UserRepository
from services.user_service import UserService
from api.schemas.user_schema import RegisterSchema, LoginSchema

user_bp = Blueprint("user", __name__, url_prefix="/api")

@user_bp.route("/register", methods=["POST"])
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
        return jsonify('Register suceessful'), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400



@user_bp.route("/login", methods=["POST"])
def login():
    try:
        data = LoginSchema().load(request.json)
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)

        user = service.get_user_name(data['user_name'])

        if user and user.user_password == data['user_password']:
            return jsonify({"message": "Login successful"}), 201
        else:
            return jsonify({"error": "Invalid username or password"}), 401
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400