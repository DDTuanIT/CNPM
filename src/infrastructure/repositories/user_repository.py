from domain.models.iuser_reposiory import IUserRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.user_model import UserModel
from infrastructure.databases.mssql import get_db_session


class UserRepository(IUserRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, user: UserModel) -> UserModel:
        try:
            self.session.add(user)
            self.session.commit()
            self.session.refresh(user)
            return user
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding user {e}")
        finally:
            self.session.close()

    def get_by_id(self, user_id: int) -> Optional[UserModel]:
        return self.session.query(UserModel).filter_by(user_id=user_id).first()

    def get_by_user_name(self, user_name: str) -> Optional[UserModel]:
        return self.session.query(UserModel).filter_by(user_name=user_name).first()

    def get_by_user_email(self, email: str) -> Optional[UserModel]:
        return self.session.query(UserModel).filter_by(email=email).first()

    def list(self) -> List[UserModel]:
        self._users = Session.query(UserModel).all()
        return self._users

    def update(self, user: UserModel) -> UserModel:
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
