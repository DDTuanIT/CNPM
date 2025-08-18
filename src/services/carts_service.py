from infrastructure.models.carts_model import CartsModel
from infrastructure.models.cart_items_model import CartItemsModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.icarts_repository import ICartsRepository
from domain.models.icart_items_repository import ICartItemsRepository
from typing import List, Optional

class CartsService:
    def __init__(self, repository: ICartsRepository, _repository: ICartItemsRepository):
        self.cart_repository = repository
        self.cartItem_repository = _repository

    def create_carts(self, cart_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, items) -> CartsModel:
        cart = CartsModel(cart_id = cart_id, user_id=user_id)
        for item in items:
            cart_item = CartItemsModel(id=item['id'], cart_id=cart_id, watch_id=item['watch_id'], quantity=item['quantity'])
        self.cart_repository.add(cart)
        return self.cartItem_repository.add(cart_item)

    def get_carts(self, cart_id: UNIQUEIDENTIFIER) -> Optional[CartsModel]:
        return self.repository.get_by_id(cart_id)

    def list_carts(self) -> List[CartsModel]:
        return self.repository.list()

    def update_carts(self, cart_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER) -> CartsModel:
        carts = CartsModel(cart_id=cart_id, user_id=user_id)
        return self.repository.update(carts)

    def delete_carts(self, cart_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(cart_id) 