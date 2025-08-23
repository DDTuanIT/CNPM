from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class SupportTicketModel(Base):
    __tablename__ = 'support_ticket'
    __table_args__ = {'extend_existing': True}

    support_ticket_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    user_id = Column(UNIQUEIDENTIFIER, ForeignKey('user.user_id'), nullable=False)
    issue_description = Column(String(1000), nullable=False)
    create_at = Column(DateTime, nullable=False)
    response_at = Column(DateTime, nullable=True)
    status = Column(String(50), nullable=False)
    

    def to_domain(self):
        from domain.models.support_ticket import SupportTicket
        return SupportTicket(
            support_ticket_id=str(self.support_ticket_id),
            user_id=str(self.user_id),
            issue_description=self.issue_description,
            create_at=self.create_at,
            response_at=self.response_at,
            status=self.status
        )
    user_ticket = relationship('UserModel', back_populates='support_tickets')