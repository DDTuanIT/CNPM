from domain.models.imessage_remository import IMessageRepository
from domain.models.message import Message
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

	def add(self, message: Message) -> Message:
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

	def get_by_id(self, message_id: int) -> Optional[Message]:
		return self.session.query(Message).filter_by(id=message_id).first()

	def list(self) -> List[Message]:
		self._messages = session.query(Message).all()
		return self._messages

	def update(self, message: Message) -> Message:
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