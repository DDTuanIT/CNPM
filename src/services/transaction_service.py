from domain.models.transaction import Transaction
from domain.models.itransaction_repository import ITransactionRepository
from typing import List, Optional

class TransactionService:
    def __init__(self, repository: ITransactionRepository):
        self.repository = repository

    def create_transaction(self, transaction_id: int, buyer_id: int, watch_id: int, watch_price: float, purchase_date, transaction_status: str, escrow: float, feedback_id: int) -> Transaction:
        transaction = Transaction(transaction_id=transaction_id, buyer_id=buyer_id, watch_id=watch_id, watch_price=watch_price, purchase_date=purchase_date, transaction_status=transaction_status, escrow=escrow, feedback_id=feedback_id)
        return self.repository.add(transaction)

    def get_transaction(self, transaction_id: int) -> Optional[Transaction]:
        return self.repository.get_by_id(transaction_id)

    def list_transactions(self) -> List[Transaction]:
        return self.repository.list()

    def update_transaction(self, transaction_id: int, buyer_id: int, watch_id: int, watch_price: float, purchase_date, transaction_status: str, escrow: float, feedback_id: int) -> Transaction:
        transaction = Transaction(transaction_id=transaction_id, buyer_id=buyer_id, watch_id=watch_id, watch_price=watch_price, purchase_date=purchase_date, transaction_status=transaction_status, escrow=escrow, feedback_id=feedback_id)
        return self.repository.update(transaction)

    def delete_transaction(self, transaction_id: int) -> None:
        self.repository.delete(transaction_id) 