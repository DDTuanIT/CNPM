from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.models.orders_model import OrdersModel
from infrastructure.models.order_items_model import OrderItemsModel
from services.orders_service import OrdersService
from api.schemas.orders_schema import OrdersSchema, OrderPostSchema
from infrastructure.repositories.orders_repository import OrdersRepository
from infrastructure.repositories.order_items_repository import OrderItemsRepository
from sqlalchemy.orm import joinedload
order_bp = Blueprint("order", __name__, url_prefix="/api")

@order_bp.route("/orders/<uuid:order_id>", methods=["GET"]) 
def get_orders(order_id):
    try:
        db = get_db_session()
        orders = (
            db.query(OrdersModel)
            .options(
                joinedload(OrdersModel.user_order),
                joinedload(OrdersModel.order_items).joinedload(OrderItemsModel.watch)
            ).filter(OrdersModel.order_id == order_id)
        ).first()

        if not orders:
            return jsonify({"error": "Order not found"}), 404

        return jsonify(OrdersSchema().dump(orders)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400 


@order_bp.route("/orders", methods=['POST'])
def post_order():
    try:
        data = OrderPostSchema().load(request.json)
        db = get_db_session()
        order_repo = OrdersRepository(db)
        orderItem_repo = OrderItemsRepository(db)
        service = OrdersService(order_repo, orderItem_repo)

        service.create_orders(
            data['order_id'],
            data['user_id'],
            data['items']
        )
        return jsonify('Order created successfully'), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400
