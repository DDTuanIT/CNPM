from domain.models.iorder_items_repository import IOrderItemsRepository
from typing import List, Optional
from sqlalchemy.orm import Session
from infrastructure.models.order_items_model import OrderItemsModel
from infrastructure.databases.mssql import get_db_session


class OrderItemsRepository(IOrderItemsRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, order_item: OrderItemsModel) -> OrderItemsModel:
        try:
            self.session.add(order_item)
            self.session.commit()
            self.session.refresh(order_item)
            return order_item
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding order_item {e}")
        finally:
            self.session.close()

    def get_by_id(self, order_item_id: int) -> Optional[OrderItemsModel]:
        return self.session.query(OrderItemsModel).filter_by(id=order_item_id).first()

    def list(self) -> List[OrderItemsModel]:
        self._order_items = Session.query(OrderItemsModel).all()
        return self._order_items

    def update(self, order_item: OrderItemsModel) -> OrderItemsModel:
        try:
            self.session.merge(order_item)
            self.session.commit()
            return order_item
        except Exception:
            self.session.rollback()
            raise ValueError('order_item not found')
        finally:
            self.session.close()

    def delete(self, order_item_id: int) -> None:
        order_item = self.get_by_id(order_item_id)
        if order_item:
            self.session.delete(order_item)
            self.session.commit()
