from sqlalchemy import Column, Integer, String, Enum
from infrastructure.databases.base import Base
import enum

# Định nghĩa các vai trò
class RoleEnum(enum.Enum):
    seller = "seller"
    buyer = "buyer"
    appraiser = "appraiser"
    admin = "admin"
    support = "support"

# Model người dùng
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    role = Column(Enum(RoleEnum), nullable=False)
