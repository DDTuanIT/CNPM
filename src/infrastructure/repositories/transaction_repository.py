from domain.models.itransaction_repository import ITransactionRepository
from domain.models.transaction import Transaction
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.transaction_model import TransactionModel
from infrastructure.databases.mssql import session

class TransactionRepository(ITransactionRepository):
	def __init__(self, session: Session = session):
		self.transactions = []
		self.__id__counter = 1
		self.session = session

	def add(self, transaction: Transaction) -> Transaction:
		try:
			self.session.add(transaction)   
			self.session.commit()    
			self.session.refresh(transaction)
			return transaction
		except Exception:
			self.session.rollback()   
			raise ValueError('Transaction not found')
		finally:
			self.session.close()      

	def get_by_id(self, transaction_id: int) -> Optional[Transaction]:
		return self.session.query(Transaction).filter_by(id=transaction_id).first()

	def list(self) -> List[Transaction]:
		self._transactions = session.query(Transaction).all()
		return self._transactions

	def update(self, transaction: Transaction) -> Transaction:
		try:
			self.session.merge(transaction)
			self.session.commit()
			return transaction
		except Exception:
			self.session.rollback()
			raise ValueError('Transaction not found')
		finally:
			self.session.close()
			
	def delete(self, transaction_id: int) -> None:
		transaction = self.get_by_id(transaction_id)
		if Transaction:
			self.session.delete(transaction)
			self.session.commit()