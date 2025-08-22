from infrastructure.databases.base import Base

class SupportTicket:
    def __init__(self, support_ticket_id: str, user_id: str, issue_description: str, create_at, response_at, status: str):
        self.support_ticket_id = support_ticket_id
        self.user_id = user_id
        self.issue_description = issue_description
        self.create_at = create_at
        self.response_at = response_at
        self.status = status
    
    def to_dict(self):
        return {
            'support_ticket_id': self.support_ticket_id,
            'user_id': self.user_id,
            'issue_description': self.issue_description,
            'create_at': self.create_at.isoformat() if self.create_at else None,
            'response_at': self.response_at.isoformat() if self.response_at else None,
            'status': self.status
        }