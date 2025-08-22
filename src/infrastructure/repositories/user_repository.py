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
            model = UserModel(
                user_id=user.user_id,
                user_name=user.user_name,
                user_password=user.user_password,
                address=user.address,
                email=user.email,
                phone_number=user.phone_number,
                role_name=user.role_name
            )
            self.session.add(model)
            self.session.commit()
            self.session.refresh(model)
            return model.to_domain()
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding user {e}")

    def get_by_id(self, user_id: str) -> Optional[User]:
        model = self.session.query(UserModel).filter_by(user_id=user_id).first()
        return model.to_domain() if model else None

    def get_by_user_name(self, user_name: str) -> Optional[User]:
        model = self.session.query(UserModel).filter_by(user_name=user_name).first()
        return model.to_domain() if model else None

    def get_by_user_email(self, email: str) -> Optional[User]:
        model = self.session.query(UserModel).filter_by(email=email).first()
        return model.to_domain() if model else None

    def list(self) -> List[User]:
        models = self.session.query(UserModel).all()
        return [model.to_domain() for model in models]

    def update(self, user: User) -> User:
        try:
            model = self.session.query(UserModel).filter_by(user_id=user.user_id).first()
            if not model:
                raise ValueError("User not found")
            
            model.user_name = user.user_name
            model.user_password = user.user_password
            model.address = user.address
            model.email = user.email
            model.phone_number = user.phone_number
            model.role_name = user.role_name
            
            self.session.commit()
            self.session.refresh(model)
            return model.to_domain()
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error updating user: {e}")
            raise ValueError('user not found')
        finally:
            self.session.close()

    def delete(self, user_id: int) -> None:
        user = self.get_by_id(user_id)
        if user:
            self.session.delete(user)
            self.session.commit()
z