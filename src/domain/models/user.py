from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class User:
    def __innit__(self, user_id: int, fullname: str, user_name: str, user_password: str, adress: str, email: str, phone_number: str, role_name: str):
        self.user_id = user_id
        self.fullname = fullname
        self.user_name = user_name
        self.user_password = user_password
        self.adress = adress
        self.email = email
        self.phone_number = phone_number
        self.role_name = role_name


