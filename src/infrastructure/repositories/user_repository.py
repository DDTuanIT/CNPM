from domain.models.iuser_reposiory import IUserRepository
from domain.models.user import User
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

    def add(self, user: User) -> User:
        try:
            self.session.add(user)
            self.session.commit()
            self.session.refresh(user)
            return user
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding user {e}")

    def get_by_id(self, user_id: str) -> Optional[User]:
         return self.session.query(UserModel).filter_by(user_id=user_id).first()

    def get_by_user_name(self, user_name: str) -> Optional[User]:
        return self.session.query(UserModel).filter_by(user_name=user_name).first()

    def get_by_user_email(self, email: str) -> Optional[User]:
        return self.session.query(UserModel).filter_by(email=email).first()
    
    def list(self) -> List[User]:
        return self.session.query(UserModel).all()

    def update(self, user: User) -> User:
        try:
            self.session.merge(user)
            self.session.commit()
            return user
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error updating user: {e}")
        finally:
            self.session.close()

    def delete(self, user_id: int) -> None:
        user = self.get_by_id(user_id)
        if user:
            self.session.delete(user)
            self.session.commit()