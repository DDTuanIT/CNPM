from abc import ABC, abstractmethod
from .cart_items import CartItems
from typing import List, Optional

class ICartItemsRepository(ABC):
    @abstractmethod
    def add(self, cart_itemss: CartItems) -> CartItems:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[CartItems]:
        pass

    @abstractmethod
    def list(self) -> List[CartItems]:
        pass

    @abstractmethod
    def update(self, cart_items: CartItems) -> CartItems:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass 