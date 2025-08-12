from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class TransactionModel(Base):
    __tablename__ = 'transaction'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    transaction_id = Column(Integer, primary_key=True)
    buyer_id = Column(Integer, ForeignKey('user.user_id'),nullable=False)
    watch_id = Column(Integer, ForeignKey('watch.watch_id'), unique=True,nullable=False)
    watch_price = Column(Float, nullable=False)
    purchase_date = Column(DateTime)
    transaction_status = Column(String(10), nullable=False)
    escrow = Column(Float, nullable=False)
    feedback_id = Column(Integer, ForeignKey('feedback.feedback_id'),unique=True,nullable=True)

    #many to many
    buyer = relationship('UserModel', foreign_keys=[buyer_id], back_populates='purchase')
    #one to one
    watch = relationship('WatchModel', foreign_keys=[watch_id],back_populates='transaction', uselist=False)
    feedback = relationship('FeedbackModel', foreign_keys=[feedback_id], back_populates='transaction', uselist=False)