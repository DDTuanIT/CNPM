from infrastructure.models.message_model import MessageModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.imessage_remository import IMessageRepository
from typing import List, Optional

class MessageService:
    def __init__(self, repository: IMessageRepository):
        self.repository = repository

    def create_message(self, message_id: UNIQUEIDENTIFIER, content: str, create_at, sender_id: UNIQUEIDENTIFIER, receiver_id: UNIQUEIDENTIFIER) -> MessageModel:
        message = MessageModel(message_id=message_id, content=content, create_at=create_at, sender_id=sender_id, receiver_id=receiver_id)
        return self.repository.add(message)

    def get_message(self, message_id: UNIQUEIDENTIFIER) -> Optional[MessageModel]:
        return self.repository.get_by_id(message_id)

    def list_messages(self) -> List[MessageModel]:
        return self.repository.list()

    def update_message(self, message_id: UNIQUEIDENTIFIER, content: str, create_at, sender_id: UNIQUEIDENTIFIER, receiver_id: UNIQUEIDENTIFIER) -> MessageModel:
        message = MessageModel(message_id=message_id, message_id=message_id, content=content, create_at=create_at, sender_id=sender_id, receiver_id=receiver_id)
        return self.repository.update(message)

    def delete_message(self, message_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(message_id) 