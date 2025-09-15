from domain.models.iappraiser_form_repository import IAppraiserFormRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.appraiser_form_model import AppraiserFormModel
from infrastructure.databases.mssql import get_db_session


class AppraiserFormRepository(IAppraiserFormRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, appraiserForm: AppraiserFormModel) -> AppraiserFormModel:
        try:
            self.session.add(appraiserForm)
            self.session.commit()
            self.session.refresh(appraiserForm)
            return appraiserForm
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding appraiserForm {e}")
        finally:
            self.session.close()

    def get_by_id(self, appraiser_form_id: int) -> Optional[AppraiserFormModel]:
        return self.session.query(AppraiserFormModel).filter_by(appraiser_form_id=appraiser_form_id).first()

    def list(self) -> List[AppraiserFormModel]:
        return self.session.query(AppraiserFormModel).all()


    def update(self, appraiserForm: AppraiserFormModel) -> AppraiserFormModel:
        try:
            self.session.merge(appraiserForm)
            self.session.commit()
            return appraiserForm
        except Exception:
            self.session.rollback()
            raise ValueError('appraiserForm not found')
        finally:
            self.session.close()

    def delete(self, transaction_id: int) -> None:
        appraiserForm = self.get_by_id(transaction_id)
        if appraiserForm:
            self.session.delete(appraiserForm)
            self.session.commit()
