from infrastructure.models.carts_model import CartsModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.carts import Carts
from typing import List, Optional

class CartsService:
    def __init__(self, repository: Carts):
        self.repository = repository

    def create_carts(self, cart_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER) -> CartsModel:
        feedback = CartsModel(cart_id = cart_id, user_id=user_id)
        return self.repository.add(feedback)

    def get_carts(self, cart_id: UNIQUEIDENTIFIER) -> Optional[CartsModel]:
        return self.repository.get_by_id(cart_id)

    def list_carts(self) -> List[CartsModel]:
        return self.repository.list()

    def update_carts(self, cart_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER) -> CartsModel:
        carts = CartsModel(cart_id=cart_id, user_id=user_id)
        return self.repository.update(carts)

    def delete_carts(self, feedback_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(feedback_id) 