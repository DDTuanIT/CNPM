from abc import ABC, abstractmethod
from .carts import Carts
from typing import List, Optional

class IUserRepository(ABC):
    @abstractmethod
    def add(self, user: Carts) -> Carts:
        pass

    @abstractmethod
    def get_by_id(self, user_id: int) -> Optional[Carts]:
        pass

    @abstractmethod
    def get_by_user_name(self, user_name: int) -> Optional[Carts]:
        pass

    @abstractmethod
    def list(self) -> List[Carts]:
        pass

    @abstractmethod
    def update(self, user: Carts) -> Carts:
        pass

    @abstractmethod
    def delete(self, user_id: int) -> None:
        pass 