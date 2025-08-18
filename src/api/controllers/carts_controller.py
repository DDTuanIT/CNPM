from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.models.carts_model import CartsModel
from infrastructure.models.cart_items_model import CartItemsModel
from services.carts_service import CartsService
from api.schemas.carts_schema import CartsSchema, CartPostSchema
from infrastructure.repositories.carts_repository import CartsRepository
from infrastructure.repositories.cart_items_repository import CartItemsRepository
from sqlalchemy.orm import joinedload
cart_bp = Blueprint("cart", __name__, url_prefix="/api")

@cart_bp.route("/carts/<uuid:cart_id>", methods=["GET"])
def get_carts(cart_id):
    try:
        db = get_db_session()
    
        carts = (
            db.query(CartsModel)
            .options(
                joinedload(CartsModel.user_cart),
                joinedload(CartsModel.cart_items).joinedload(CartItemsModel.watch)
            ).filter(CartsModel.cart_id == cart_id)
        )

        return jsonify(CartsSchema.dump(carts)), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400


@cart_bp.route("/cart", methods=['POST'])
def post_cart():
    try:
        data = CartPostSchema().load(request.json)
        db = get_db_session()
        cart_repo = CartsRepository(db)
        cartItem_repo = CartItemsRepository(db)
        service = CartsService(cart_repo, cartItem_repo)

        service.create_carts(
            data['cart_id'],
            data['user_id'],
            data['items']
        )
        return jsonify('add item to suceessful'), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400