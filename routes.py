from sqlalchemy.exc import IntegrityError
from db import db
from models import User
from app import app
from flask import request, jsonify
from flask_cors import cross_origin
from datetime import date


@app.route('/users/<int:user_id>', methods=["GET"])
@cross_origin(origins="null")
def user_get_by_id(user_id):
    u = db.session.get(User, user_id)
    if not u:
        return jsonify({"error": "user not found"}), 404

    return jsonify({
        "id": u.id,
        "username": u.username,
        "firstname": u.firstname,
        "lastname": u.lastname,
        "email": u.email,
        "birth_date": u.birth_date.isoformat() if u.birth_date else None
    }), 200


@app.route('/users', methods=["GET", "POST"])
@cross_origin(origins="null")
def user_list():
    if request.method == "GET":
        users = db.session.query(User).order_by(User.username).all()
        result = [
            {
                "id": u.id,
                "username": u.username,
                "firstname": u.firstname,
                "lastname": u.lastname,
                "email": u.email,
                "birth_date": u.birth_date.isoformat() if u.birth_date else None
            }
            for u in users
        ]
        return jsonify(result)
    
    data = request.get_json(force=True, silent=True) or request.form.to_dict()
    if not data:
        return jsonify({"error": "no data"}), 400
    
    username = data.get("username")
    email = data.get("email")
    firstname = data.get("firstname")
    lastname = data.get("lastname")
    if not username or not email or not firstname or not lastname:
        return jsonify({"error": "username, email, firstname and lastname required"}), 400

    b_date = data.get("birthDate")
    birth = date.fromisoformat(b_date) if b_date else None

    try:
        new_user = User(
            username=username,
            firstname=data.get("firstname"),
            lastname=data.get("lastname"),
            email=email,
            birth_date=birth
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            "id": new_user.id,
            "username": new_user.username,
            "firstname": new_user.firstname,
            "lastname": new_user.lastname,
        }), 201
    except IntegrityError as exc:
        print('ERORRRRRRRRRRRRRRR',exc)
        return jsonify({"error": "UNIQUE constraint failed"}), 409
        
    except Exception as e:
        print('ERORRRRRRRRRRRRRRR',exc)
        return jsonify({"error": "error creating user"}), 400
    