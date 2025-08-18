from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.user_repository import UserRepository
from services.user_service import UserService
from api.schemas.user_schema import RegisterSchema, LoginSchema, Otp_ForgotPassword, ChangePassword
from services.otp_service import OTPService

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

@user_bp.route("/forgotpassword", methods=["POST"])
def forgot_password():
    try:
        email = request.json.get("email")
        db = get_db_session() 
        user_repo = UserRepository(db)
        service = UserService(user_repo)
        
        user = service.get_user_email(email)
        if not user:
            return jsonify({"error":"Email not found"}), 404
        otp_service = OTPService()
        otp_service.generate_and_send_otp(email)
        return jsonify({"success": True, "message":"OTP sent"}), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error":str(e)}), 400
        
@user_bp.route("/verifyotp",methods=["POST"])
def verify_otp():
    try:
        data = Otp_ForgotPassword().load(request.json)
        otp_service = OTPService()
        if otp_service.verify_otp(data['email'], data["otp"]):
            return jsonify({"success": True, "message":"Verified"})
        else:
            return jsonify({"success": False, "error":"Invalid"})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error":str(e)}), 400

@user_bp.route("/changepassword", methods=["POST"])
def change_password():
    try:
        data = ChangePassword().load(request.json)

        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)
        user = service.get_user_email(data['email'])
        if not user:
            return jsonify({"success": False, "error": "User not found"}), 404

        service.update_user(
            user.user_id,
            user.user_name,
            data["new_password"],
            user.address,
            user.email,
            user.phone_number,
            user.role_name
        )
        return jsonify({"success": True, "message": "Password changed"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400