from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.models.carts_model import CartsModel
from services.carts_service import CartsService
from api.schemas.carts_schema import CartsSchema

user_bp = Blueprint("cart", __name__, url_prefix="/api")

@user_bp.route("/carts", methods=["POST"])
def register():
    try:
        data = CartsSchema().load(request.json)
        db = get_db_session()
        user_repo = CartsModel(db)
        service = CartsService(user_repo)

        service.create_carts(
            data['cart_id'],
            data['user_id']
        )
    
        return jsonify('Register suceessful'), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

