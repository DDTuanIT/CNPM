from sqlalchemy import Column, Integer, String, DateTime,  Float
from infrastructure.databases.base import Base

class Transaction:
    def __init__(self, transaction_id: int, buyer_id: int, watch_id: int, watch_price: float, purchase_date, transaction_status: str, escrow: float, feedback_id: int):
        self.transaction_id = transaction_id
        self.buyer_id = buyer_id
        self.watch_id = watch_id
        self.watch_price = watch_price
        self.purchase_date = purchase_date
        self.transaction_status = transaction_status
        self.escrow = escrow
        self.feedback_id = feedback_id
        