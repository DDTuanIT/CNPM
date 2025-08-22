from infrastructure.models.orders_model import OrdersModel
from infrastructure.models.order_items_model import OrderItemsModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iorders_repository import IOrdersRepository
from domain.models.iorder_items_repository import IOrderItemsRepository
from typing import List, Optional

class OrdersService:
    def __init__(self, repository: IOrdersRepository, _repository: IOrderItemsRepository):
        self.order_repository = repository
        self.orderItem_repository = _repository

    def create_orders(self, order_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, items) -> OrdersModel:
        order = OrdersModel(order_id=order_id, user_id=user_id)
        for item in items:
            order_item = OrderItemsModel(id=item['id'], order_id=order_id, watch_id=item['watch_id'], quantity=item['quantity'], price=item['price'])
        self.order_repository.add(order)
        return self.orderItem_repository.add(order_item)

    def get_orders(self, order_id: UNIQUEIDENTIFIER) -> Optional[OrdersModel]:
        return self.repository.get_by_id(order_id)

    def list_orders(self) -> List[OrdersModel]:
        return self.repository.list()

    def update_orders(self, order_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER) -> OrdersModel:
        orders = OrdersModel(order_id=order_id, user_id=user_id)
        return self.repository.update(orders)

    def delete_orders(self, order_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(order_id)
