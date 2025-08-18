from abc import ABC, abstractmethod
from .carts import Carts
from typing import List, Optional

class ICartsRepository(ABC):
    @abstractmethod
    def add(self, cart: Carts) -> Carts:
        pass

    @abstractmethod
    def get_by_id(self, cart_id: int) -> Optional[Carts]:
        pass

    @abstractmethod
    def list(self) -> List[Carts]:
        pass

    @abstractmethod
    def update(self, cart: Carts) -> Carts:
        pass

    @abstractmethod
    def delete(self, cart_id: int) -> None:
        pass 