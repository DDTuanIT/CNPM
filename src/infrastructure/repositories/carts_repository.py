from domain.models.icarts_repository import ICartsRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.carts_model import CartsModel
from infrastructure.databases.mssql import get_db_session


class CartsRepository(ICartsRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, cart: CartsModel) -> CartsModel:
        try:
            self.session.add(cart)
            self.session.commit()
            self.session.refresh(cart)
            return cart
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding cart {e}")
        finally:
            self.session.close()

    def get_by_id(self, cart_id: int) -> Optional[CartsModel]:
        return self.session.query(CartsModel).filter_by(cart_id=cart_id).first()

    def list(self) -> List[CartsModel]:
        self._carts = Session.query(CartsModel).all()
        return self._carts

    def update(self, cart: CartsModel) -> CartsModel:
        try:
            self.session.merge(cart)
            self.session.commit()
            return cart
        except Exception:
            self.session.rollback()
            raise ValueError('cart not found')
        finally:
            self.session.close()

    def delete(self, cart_id: int) -> None:
        cart = self.get_by_id(cart_id)
        if cart:
            self.session.delete(cart)
            self.session.commit()
