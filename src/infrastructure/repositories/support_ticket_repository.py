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
from infrastructure.databases.mssql import get_db_session


class SupportTicketModelRepository(ISupportTicketRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, support_ticket: SupportTicketModel) -> SupportTicketModel:
        try:
            self.session.add(support_ticket)
            self.session.commit()
            self.session.refresh(support_ticket)
            return support_ticket
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding support_ticket {e}")
        finally:
            self.session.close()

    def get_by_id(self, support_ticket_id: int) -> Optional[SupportTicketModel]:
        return self.session.query(SupportTicketModel).filter_by(support_ticket_id=support_ticket_id).first()

   

    def list(self) -> List[SupportTicketModel]:
        self._support_tickets = Session.query(SupportTicketModel).all()
        return self._support_tickets

    def update(self, support_ticket: SupportTicketModel) -> SupportTicketModel:
        try:
            self.session.merge(support_ticket)
            self.session.commit()
            return support_ticket
        except Exception:
            self.session.rollback()
            raise ValueError('support_ticket not found')
        finally:
            self.session.close()

    def delete(self, support_ticket_id: int) -> None:
        support_ticket = self.get_by_id(support_ticket_id)
        if support_ticket:
            self.session.delete(support_ticket)
            self.session.commit()
