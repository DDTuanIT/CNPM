from domain.models.isupport_ticket_repository import ISupportTicketRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.support_ticker_model import SupportTicketModel
from infrastructure.databases.mssql import session

class SupportTicketRepository(ISupportTicketRepository):
	def __init__(self, session: Session = session):
		self.support_tickets = []
		self.__id__counter = 1
		self.session = session

	def add(self, support_ticket: SupportTicketModel) -> SupportTicketModel:
		try:
			self.session.add(support_ticket)   
			self.session.commit()    
			self.session.refresh(support_ticket)
			return support_ticket
		except Exception:
			self.session.rollback()   
			raise ValueError('SupportTicket not found')
		finally:
			self.session.close()      

	def get_by_id(self, support_ticket_id: int) -> Optional[SupportTicketModel]:
		return self.session.query(SupportTicketModel).filter_by(id=support_ticket_id).first()

	def list(self) -> List[SupportTicketModel]:
		self._support_tickets = session.query(SupportTicketModel).all()
		return self._support_tickets

	def update(self, support_ticket: SupportTicketModel) -> SupportTicketModel:
		try:
			self.session.merge(support_ticket)
			self.session.commit()
			return support_ticket
		except Exception:
			self.session.rollback()
			raise ValueError('SupportTicket not found')
		finally:
			self.session.close()
			
	def delete(self, support_ticket_id: int) -> None:
		support_ticket = self.get_by_id(support_ticket_id)
		if support_ticket:
			self.session.delete(support_ticket)
			self.session.commit()