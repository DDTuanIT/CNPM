from domain.models.iorders_repository import IOrdersRepository
from typing import List, Optional
from sqlalchemy.orm import Session
from infrastructure.models.orders_model import OrdersModel
from infrastructure.databases.mssql import get_db_session


class OrdersRepository(IOrdersRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, order: OrdersModel) -> OrdersModel:
        try:
            self.session.add(order)
            self.session.commit()
            self.session.refresh(order)
            return order
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding order {e}")
        finally:
            self.session.close()

    def get_by_id(self, order_id: str) -> Optional[OrdersModel]:
        return self.session.query(OrdersModel).filter_by(order_id=order_id).first()

    def list(self) -> List[OrdersModel]:
        self._orders = Session.query(OrdersModel).all()
        return self._orders

    def update(self, order: OrdersModel) -> OrdersModel:
        try:
            self.session.merge(order)
            self.session.commit()
            return order
        except Exception:
            self.session.rollback()
            raise ValueError('order not found')
        finally:
            self.session.close()

    def delete(self, order_id: str) -> None:
        order = self.get_by_id(order_id)
        if order:
            self.session.delete(order)
            self.session.commit()
