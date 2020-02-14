from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, root_path="apps/")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

from apps import routes, models

db.create_all()
