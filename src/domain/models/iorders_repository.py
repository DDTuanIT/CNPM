from abc import ABC, abstractmethod
from .orders import Orders
from typing import List, Optional

class IOrdersRepository(ABC):
    @abstractmethod
    def add(self, order: Orders) -> Orders:
        pass

    @abstractmethod
    def get_by_id(self, order_id: int) -> Optional[Orders]:
        pass

    @abstractmethod
    def list(self) -> List[Orders]:
        pass

    @abstractmethod
    def update(self, order: Orders) -> Orders:
        pass

    @abstractmethod
    def delete(self, order_id: int) -> None:
        pass
