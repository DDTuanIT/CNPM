from domain.models.isupport_ticket_repository import ISupportTicketRepository
from domain.models.support_ticket import SupportTicket
from typing import List, Optional
from sqlalchemy.orm import Session
from infrastructure.models.support_ticket import SupportTicketModel
from infrastructure.databases.mssql import get_db_session

class SupportTicketModelRepository(ISupportTicketRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, ticket: SupportTicket) -> SupportTicket:
        try:
            model = SupportTicketModel(
                support_ticket_id=ticket.support_ticket_id,
                user_id=ticket.user_id,
                issue_description=ticket.issue_description,
                create_at=ticket.create_at,
                response_at=ticket.response_at,
                status=ticket.status
            )
            self.session.add(model)
            self.session.commit()
            self.session.refresh(model)
            return model.to_domain()
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding support_ticket: {e}")

    def get_by_id(self, support_ticket_id: str) -> Optional[SupportTicket]:
        model = self.session.query(SupportTicketModel).filter_by(support_ticket_id=support_ticket_id).first()
        return model.to_domain() if model else None

    def list(self) -> List[SupportTicket]:
        models = self.session.query(SupportTicketModel).all()
        return [model.to_domain() for model in models]

    def update(self, ticket: SupportTicket) -> SupportTicket:
        try:
            model = self.session.query(SupportTicketModel).filter_by(support_ticket_id=ticket.support_ticket_id).first()
            if not model:
                raise ValueError("Support ticket not found")
            
            model.issue_description = ticket.issue_description
            model.response_at = ticket.response_at
            model.status = ticket.status
            
            self.session.commit()
            self.session.refresh(model)
            return model.to_domain()
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error updating support_ticket: {e}")

    def delete(self, support_ticket_id: str) -> None:
        try:
            model = self.session.query(SupportTicketModel).filter_by(support_ticket_id=support_ticket_id).first()
            if model:
                self.session.delete(model)
                self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error deleting support_ticket: {e}")
