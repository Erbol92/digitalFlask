from flask import Flask
from flask_cors import CORS
from models import *
from db import db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

with app.app_context():
    # db.drop_all() 
    db.create_all()

CORS(app)