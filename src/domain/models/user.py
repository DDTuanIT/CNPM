from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class User:
    def __init__(self, user_id: int,  user_name: str, user_password: str, address: str, email: str, phone_number: str, role_name: str):
        self.user_id = user_id
        self.user_name = user_name
        self.user_password = user_password
        self.address = address
        self.email = email
        self.phone_number = phone_number
        self.role_name = role_name


