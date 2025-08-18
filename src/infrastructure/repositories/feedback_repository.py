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
from infrastructure.models.feedback_model import FeedbackModel
from infrastructure.databases.mssql import get_db_session


class FeedbackRepository(IFeedbackRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, feedback: FeedbackModel) -> FeedbackModel:
        try:
            self.session.add(feedback)
            self.session.commit()
            self.session.refresh(feedback)
            return feedback
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding feedback {e}")
        finally:
            self.session.close()

    def get_by_id(self, feedback_id: int) -> Optional[FeedbackModel]:
        return self.session.query(FeedbackModel).filter_by(feedback_id=feedback_id).first()

    def list(self) -> List[FeedbackModel]:
        self._feedbacks = Session.query(FeedbackModel).all()
        return self._feedbacks

    def update(self, feedback: FeedbackModel) -> FeedbackModel:
        try:
            self.session.merge(feedback)
            self.session.commit()
            return feedback
        except Exception:
            self.session.rollback()
            raise ValueError('feedback not found')
        finally:
            self.session.close()

    def delete(self, feedback_id: int) -> None:
        feedback = self.get_by_id(feedback_id)
        if feedback:
            self.session.delete(feedback)
            self.session.commit()
