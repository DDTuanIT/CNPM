from domain.models.imessage_remository import IMessageRepository

from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.message_model import MessageModel
from infrastructure.databases.mssql import session

class MessageRepository(IMessageRepository):
	def __init__(self, session: Session = session):
		self.messages = []
		self.__id__counter = 1
		self.session = session

	def add(self, message: MessageModel) -> MessageModel:
		try:
			self.session.add(message)   
			self.session.commit()    
			self.session.refresh(message)
			return message
		except Exception:
			self.session.rollback()   
			raise ValueError('message not found')
		finally:
			self.session.close()      

	def get_by_id(self, message_id: int) -> Optional[MessageModel]:
		return self.session.query(MessageModel).filter_by(id=message_id).first()

	def list(self) -> List[MessageModel]:
		self._messages = session.query(MessageModel).all()
		return self._messages

	def update(self, message: MessageModel) -> MessageModel:
		try:
			self.session.merge(message)
			self.session.commit()
			return message
		except Exception:
			self.session.rollback()
			raise ValueError('message not found')
		finally:
			self.session.close()
			
	def delete(self, message_id: int) -> None:
		message = self.get_by_id(message_id)
		if message:
			self.session.delete(message)
			self.session.commit()