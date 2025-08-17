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
from infrastructure.models.carts_model import CartsModel
from infrastructure.databases.mssql import session

class FeedbackRepository(IFeedbackRepository):
	def __init__(self, session: Session = session):
		self.feedbacks = []
		self.__id__counter = 1
		self.session = session

	def add(self, carts: CartsModel) -> CartsModel:
		try:
			self.session.add(carts)   
			self.session.commit()    
			self.session.refresh(carts)
			return carts
		except Exception:
			self.session.rollback()   
			raise ValueError('carts not found')
		finally:
			self.session.close()      

	def get_by_id(self, feedback_id: int) -> Optional[CartsModel]:
		return self.session.query(CartsModel).filter_by(id=feedback_id).first()

	def list(self) -> List[CartsModel]:
		self._feedbacks = session.query(CartsModel).all()
		return self._feedbacks

	def update(self, carts: CartsModel) -> CartsModel:
		try:
			self.session.merge(carts)
			self.session.commit()
			return carts
		except Exception:
			self.session.rollback()
			raise ValueError('carts not found')
		finally:
			self.session.close()
			
	def delete(self, feedback_id: int) -> None:
		carts = self.get_by_id(feedback_id)
		if carts:
			self.session.delete(carts)
			self.session.commit()