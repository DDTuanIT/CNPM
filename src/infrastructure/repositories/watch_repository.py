from domain.models.iwatch_repository import IWatchRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.watch_model import WatchModel
from infrastructure.databases.mssql import session

class WatchRepository(IWatchRepository):
	def __init__(self, session: Session = session):
		self.watchs = []
		self.__id__counter = 1
		self.session = session

	def add(self, watch: WatchModel) -> WatchModel:
		try:
			self.session.add(watch)   
			self.session.commit()    
			self.session.refresh(watch)
			return watch
		except Exception:
			self.session.rollback()   
			raise ValueError('WatchModel not found')
		finally:
			self.session.close()      

	def get_by_id(self, watch_id: int) -> Optional[WatchModel]:
		return self.session.query(WatchModel).filter_by(id=watch_id).first()

	def list(self) -> List[WatchModel]:
		self._watchs = session.query(WatchModel).all()
		return self._watchs

	def update(self, watch: WatchModel) -> WatchModel:
		try:
			self.session.merge(watch)
			self.session.commit()
			return watch
		except Exception:
			self.session.rollback()
			raise ValueError('Watch not found')
		finally:
			self.session.close()
			
	def delete(self, watch_id: int) -> None:
		watch = self.get_by_id(watch_id)
		if watch:
			self.session.delete(watch)
			self.session.commit()