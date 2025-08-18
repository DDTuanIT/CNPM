from domain.models.icart_items_repository import ICartItemsRepository
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.cart_items_model import CartItemsModel
from infrastructure.databases.mssql import get_db_session


class CartItemsRepository(ICartItemsRepository):
    def __init__(self, session: Optional[Session] = None):
        self.session = session or get_db_session()

    def add(self, cart_Item: CartItemsModel) -> CartItemsModel:
        try:
            self.session.add(cart_Item)
            self.session.commit()
            self.session.refresh(cart_Item)
            return cart_Item
        except Exception as e:
            self.session.rollback()
            raise ValueError(f"Error adding cart_Item {e}")
        finally:
            self.session.close()

    def get_by_id(self, cart_Item_id: int) -> Optional[CartItemsModel]:
        return self.session.query(CartItemsModel).filter_by(cart_Item_id=cart_Item_id).first()

    def list(self) -> List[CartItemsModel]:
        self._cart_Items = Session.query(CartItemsModel).all()
        return self._cart_Items

    def update(self, cart_Item: CartItemsModel) -> CartItemsModel:
        try:
            self.session.merge(cart_Item)
            self.session.commit()
            return cart_Item
        except Exception:
            self.session.rollback()
            raise ValueError('cart_Item not found')
        finally:
            self.session.close()

    def delete(self, cart_Item_id: int) -> None:
        cart_Item = self.get_by_id(cart_Item_id)
        if cart_Item:
            self.session.delete(cart_Item)
            self.session.commit()
