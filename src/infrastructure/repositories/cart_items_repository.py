from domain.models.ifeedback_repository import IFeedbackRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.cart_items_model import CartItesmsModel
from infrastructure.databases.mssql import session

class FeedbackRepository(IFeedbackRepository):
	def __init__(self, session: Session = session):
		self.feedbacks = []
		self.__id__counter = 1
		self.session = session

	def add(self, cart_items: CartItesmsModel) -> CartItesmsModel:
		try:
			self.session.add(cart_items)   
			self.session.commit()    
			self.session.refresh(cart_items)
			return cart_items
		except Exception:
			self.session.rollback()   
			raise ValueError('cart_items not found')
		finally:
			self.session.close()      

	def get_by_id(self, feedback_id: int) -> Optional[CartItesmsModel]:
		return self.session.query(CartItesmsModel).filter_by(id=feedback_id).first()

	def list(self) -> List[CartItesmsModel]:
		self._feedbacks = session.query(CartItesmsModel).all()
		return self._feedbacks

	def update(self, cart_items: CartItesmsModel) -> CartItesmsModel:
		try:
			self.session.merge(cart_items)
			self.session.commit()
			return cart_items
		except Exception:
			self.session.rollback()
			raise ValueError('cart_items not found')
		finally:
			self.session.close()
			
	def delete(self, feedback_id: int) -> None:
		cart_items = self.get_by_id(feedback_id)
		if cart_items:
			self.session.delete(cart_items)
			self.session.commit()