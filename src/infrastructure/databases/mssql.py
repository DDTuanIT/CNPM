from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from config import Config
from infrastructure.databases.base import Base



DATABASE_URL = Config.DATABASE_URI


print(DATABASE_URL)
# Create a new SQLAlchemy engine instance
engine = create_engine(DATABASE_URL,
                       pool_size=20,
                       max_overflow=40,
                       pool_timeout=30,    
                        pool_recycle=1800 )

# Create a configured "Session" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_mssql(app):
    # Import all modules here that might define models so that
    # they will be registered properly on the metadata.
    # This is necessary to avoid circular imports.
    

    # Create the database tables
    Base.metadata.create_all(bind=engine)


def get_db_session():
    return SessionLocal()
session = SessionLocal()