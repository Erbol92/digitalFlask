from sqlalchemy import Integer, String, Date
from sqlalchemy.orm import Mapped, mapped_column
from datetime import date

from db import Base


class User(Base):

    __tablename__ = 'user'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    firstname: Mapped[str] = mapped_column(String(30), nullable=False)
    lastname: Mapped[str] = mapped_column(String(30), nullable=False)
    email: Mapped[str] = mapped_column(String(60), unique=True, nullable=False)
    birth_date: Mapped[date] = mapped_column(Date, nullable=True)