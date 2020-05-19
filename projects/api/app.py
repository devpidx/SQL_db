#SQLAlchemy
from sqlalchemy import create_engine
database_path = "product_codes.db"

engine = create_engine(f"sqlite:///{database_path}") 