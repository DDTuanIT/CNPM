from domain.models.iuser_reposiory import IUserRepository
from domain.models.user	 import User
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from domain.models.user import User
from infrastructure.databases.mssql import session

class UserRepository(IUserRepository):
	def __init__(self, session: Session = session):
		self.users = []
		self.__id__counter = 1
		self.session = session

	def add(self, user: User) -> User:
		try:
			self.session.add(user)   
			self.session.commit()    
			self.session.refresh(user)
			return user
		except Exception:
			self.session.rollback()   
			raise ValueError('Transaction not found')
		finally:
			self.session.close()       

	def get_by_id(self, user_id: int) -> Optional[User]:
		return self.session.query(User).filter_by(id=user_id).first()

	def list(self) -> List[User]:
		self._users = session.query(User).all()
		return self._users

	def update(self, user: User) -> User:
		try:
			self.session.merge(user)
			self.session.commit()
			return user
		except Exception:
			self.session.rollback()
			raise ValueError('user not found')
		finally:
			self.session.close()
			
	def delete(self, user_id: int) -> None:
		user = self.get_by_id(user_id)
		if user:
			self.session.delete(user)
			self.session.commit()