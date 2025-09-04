from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.user_repository import UserRepository
from services.user_service import UserService
from api.schemas.user_schema import RegisterSchema, LoginSchema, Otp_ForgotPassword, ChangePassword, UserDataSchema, UserUpdateSchema
from services.otp_service import OTPService
from sqlalchemy.exc import IntegrityError
from flask_cors import cross_origin

user_bp = Blueprint("user", __name__, url_prefix="/api")

@user_bp.route("/register", methods=["POST"])
def register():
    try:
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 415
            
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "No input data provided"}), 400
            
        # Validate and deserialize input
        data = RegisterSchema().load(json_data)
        
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)
 
        user = service.get_user_name(data['user_name'])
        emailCheck = service.get_user_email(data['email'])
        if user:
            return jsonify({"success": False, "message": "User Name had been used"}),404
        if emailCheck:
            return jsonify({"success": False, "message": "Email had been used"}),403
        service.create_user(
            data['user_id'],
            data['user_name'],
            data['full_name'],
            data["user_password"],
            data['address'],
            data["email"],
            data['phone_number'],
            data["role_name"] 
        )
      
        return jsonify({"success":True,"message": 'Register suceessful'}), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"success": False,"error": str(e)}), 400



@user_bp.route("/login", methods=["POST"])
def login():
    try:
        data = LoginSchema().load(request.json)
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)

        user = service.get_user_name(data['user_name'])
        if not user:
            return jsonify({"success": False, "message": "Invalid account"}),404
        
        if user and user.user_password == data['user_password']:
            return jsonify(UserDataSchema().dump(user)), 200
        else:
            return jsonify({"success": False,"message": "Incorrect password"}), 401
    except Exception as e: 
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@user_bp.route("/Login", methods=["PUT"])
def updateIf():
    try:
        data = UserDataSchema().load(request.json)
        db = get_db_session()
        user_repo = UserRepository(db)
        service = UserService(user_repo)
        user = service.get_user_name(data['user_name'])
        service.update_user(
            data['user_id'],
            data['user_name'],
            data['full_name'],
            user.user_password,
            data['address'],
            data['email'],
            data['phone_number'],
            data['role_name']
        )
        return jsonify({"success": True, "message": "User update successfully"}), 200
    except Exception as e: 
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

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
            user.full_name,
            data["new_password"],
            user.address,
            user.email,
            user.phone_number,
            user.role_name
        )
        return jsonify({"success": True, "message": "Password changed"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
        
        
        

@user_bp.route("/users", methods=["GET"])
def list_users():
    try:
        db = get_db_session()
        repo = UserRepository(db)
        service = UserService(repo)
        users = service.list_users()
        return jsonify(UserDataSchema(many=True).dump(users)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@user_bp.route("/users/<uuid:user_id>", methods=["PUT"])
def update_user(user_id):
    try:
        db = get_db_session()
        repo = UserRepository(db)
        service = UserService(repo)

        json_data = request.get_json()
        data = UserUpdateSchema().load(json_data)

        user = service.get_user(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        # giữ nguyên password cũ nếu không gửi lên
        password = data.get("user_password") or user.user_password

        updated = service.update_user(
            user_id=user.user_id,
            user_name=data.get("user_name", user.user_name),
            full_name=data.get("full_name", user.full_name),
            user_password=password,
            address=data.get("address", user.address),
            email=data.get("email", user.email),
            phone_number=data.get("phone_number", user.phone_number),
            role_name=data.get("role_name", user.role_name),
        )

        return jsonify(UserDataSchema().dump(updated)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@user_bp.route("/users/<uuid:user_id>", methods=["DELETE"])
def delete_user(user_id):
    try:
        db = get_db_session()
        repo = UserRepository(db)
        service = UserService(repo)

        user = service.get_user(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        service.delete_user(user_id)
        return jsonify({"success": True, "message": "User deleted"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route("/admin/stats", methods=["GET"])
def admin_stats():
    try:
        db = get_db_session()
        repo = UserRepository(db)
        service = UserService(repo)

        all_users = service.list_users()
        # chỉ đếm buyer + seller
        count_users = sum(
            1 for u in all_users if u.role_name not in ["admin", "support", "appraiser"]
        )

        return jsonify({
            "users": count_users,
            "transactions": 456,
            "disputes": 7 
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
