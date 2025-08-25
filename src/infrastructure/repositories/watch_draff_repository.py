from domain.models.iwatch_draff_repository import IWatchDraffRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.watch_draff_model import WatchDraffModel
from infrastructure.databases.mssql import get_db_session


class WatchDraffRepository(IWatchDraffRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, watchDraff: WatchDraffModel) -> WatchDraffModel:
        try:
            self.session.add(watchDraff)
            self.session.commit() 
            self.session.refresh(watchDraff)
            return watchDraff
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding watchDraff {e}")
        finally:
            self.session.close()

    def get_by_id(self, watch_id: int) -> Optional[WatchDraffModel]:
        return self.session.query(WatchDraffModel).filter_by(watch_id=watch_id).first()

    def list(self) -> List[WatchDraffModel]:
        self._watchs = self.session.query(WatchDraffModel).all()
        return self._watchs

    def update(self, watchDraff: WatchDraffModel) -> WatchDraffModel:
        try:
            self.session.merge(watchDraff)
            self.session.commit()
            return watchDraff
        except Exception:
            self.session.rollback()
            raise ValueError('watchDraff not found')
        finally:
            self.session.close()

    def delete(self, watch_id: int) -> None:
        watchDraff = self.get_by_id(watch_id)
        if watchDraff:
            self.session.delete(watchDraff)
            self.session.commit()
