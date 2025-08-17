from abc import ABC, abstractmethod
from .cart_items import CartItems
from typing import List, Optional

class IUserRepository(ABC):
    @abstractmethod
    def add(self, user: CartItems) -> CartItems:
        pass

    @abstractmethod
    def get_by_id(self, user_id: int) -> Optional[CartItems]:
        pass

    @abstractmethod
    def get_by_user_name(self, user_name: int) -> Optional[CartItems]:
        pass

    @abstractmethod
    def list(self) -> List[CartItems]:
        pass

    @abstractmethod
    def update(self, user: CartItems) -> CartItems:
        pass

    @abstractmethod
    def delete(self, user_id: int) -> None:
        pass 