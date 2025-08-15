from infrastructure.models.transaction_model import TransactionModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.itransaction_repository import ITransactionRepository
from typing import List, Optional

class TransactionService:
    def __init__(self, repository: ITransactionRepository):
        self.repository = repository

    def create_transaction(self, transaction_id: UNIQUEIDENTIFIER, buyer_id: UNIQUEIDENTIFIER, watch_id: UNIQUEIDENTIFIER, watch_price: float, purchase_date, transaction_status: str, escrow: float, feedback_id: UNIQUEIDENTIFIER) -> TransactionModel:
        transaction = TransactionModel(transaction_id=transaction_id, buyer_id=buyer_id, watch_id=watch_id, watch_price=watch_price, purchase_date=purchase_date, transaction_status=transaction_status, escrow=escrow, feedback_id=feedback_id)
        return self.repository.add(transaction)

    def get_transaction(self, transaction_id: UNIQUEIDENTIFIER) -> Optional[TransactionModel]:
        return self.repository.get_by_id(transaction_id)

    def list_transactions(self) -> List[TransactionModel]:
        return self.repository.list()

    def update_transaction(self, transaction_id: UNIQUEIDENTIFIER, buyer_id: UNIQUEIDENTIFIER, watch_id: UNIQUEIDENTIFIER, watch_price: float, purchase_date, transaction_status: str, escrow: float, feedback_id: UNIQUEIDENTIFIER) -> TransactionModel:
        transaction = TransactionModel(transaction_id=transaction_id, buyer_id=buyer_id, watch_id=watch_id, watch_price=watch_price, purchase_date=purchase_date, transaction_status=transaction_status, escrow=escrow, feedback_id=feedback_id)
        return self.repository.update(transaction)

    def delete_transaction(self, transaction_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(transaction_id) 
