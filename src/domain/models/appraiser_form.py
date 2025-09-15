from sqlalchemy import Column, Integer, String, DateTime,  Float, TEXT
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base

class AppraiserForm:
    def __init__(self, appraiser_form_id: int, user_id: int, phone_number: Integer, email: String, address: String, current_job: TEXT, experience_years: Integer, certificate: String ):
        self.appraiser_form_id = appraiser_form_id
        self.user_id = user_id
        self.phone_number = phone_number
        self.email = email
        self.address = address
        self.current_job = current_job
        self.experience_years = experience_years
        self.certificate = certificate
