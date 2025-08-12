from abc import ABC, abstractmethod
from .transaction import Transaction
from typing import List, Optional

class ITransactionRepository(ABC):
    @abstractmethod
    def add(self, transaction: Transaction) -> Transaction:
        pass

    @abstractmethod
    def get_by_id(self, transaction_id: int) -> Optional[Transaction]:
        pass

    @abstractmethod
    def list(self) -> List[Transaction]:
        pass

    @abstractmethod
    def update(self, transaction: Transaction) -> Transaction:
        pass

    @abstractmethod
    def delete(self, transaction_id: int) -> None:
        pass 
