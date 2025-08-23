from abc import ABC, abstractmethod
from typing import List, Optional
from domain.models.oder_items import OrderItems

class IOrderItemsRepository(ABC):
    @abstractmethod
    def add(self, order_item: OrderItems) -> OrderItems:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[OrderItems]:
        pass

    @abstractmethod
    def list(self) -> List[OrderItems]:
        pass

    @abstractmethod
    def update(self, order_item: OrderItems) -> OrderItems:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
