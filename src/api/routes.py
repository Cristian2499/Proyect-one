"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Client, Restaurant
from sqlalchemy.exc import DataError
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api, resources={r"/*": {"origins": "http://localhost:3000"}})


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
@api.route('/register/client', methods=['POST'])
def client_registration():
    data = request.json
    email = data.get('email')
    username =  data.get('username')
    password = data.get('password')
    department = data.get('department')
    city = data.get('city')

    not_unique_email = Client.query.filter_by(email=email).first()
    not_unique_username = Client.query.filter_by(username=username).first()

    if not_unique_email:
        return jsonify({"error": 'Email is already in use'}),400
    if not_unique_username:
        return jsonify({"error":'Username is already in use'}),400
    
    try:
        new_client = Client(email=email, username=username, department=department,city=city)
        new_client.set_password(password)
        db.session.add(new_client)
        db.session.commit()
        return jsonify({"message":"User registered correctly"}), 201
    except DataError as e:
        db.session.rollback()
        return jsonify('Bad Request: Incorrect data format/type'),400
    except Exception as e:
         db.session.rollback()
         return jsonify('Server error: Failed to process request'), 500
    
@api.route('/register/restaurant', methods=['POST'])
def restaurant_registration():
    data = request.json
    email = data.get('email')
    username =  data.get('username')
    password = data.get('password')
    department = data.get('department')
    city = data.get('city')
    not_unique_email = Restaurant.query.filter_by(email=email).first()
    not_unique_username = Restaurant.query.filter_by(username=username).first()

    if not_unique_email:
        return jsonify({"error": 'Email is already in use'}),400
    if not_unique_username:
        return jsonify({"error":'Username is already in use'}),400
    
    try:
        new_restaurant = Restaurant(email=email, username=username, department=department,city=city)
        new_restaurant.set_password(password)
        db.session.add(new_restaurant)
        db.session.commit()
        return jsonify({"message":"Restaurant registered correctly"}), 201
    except DataError as e:
        db.session.rollback()
        return jsonify('Bad Request: Incorrect data format/type'),400
    except Exception as e:
         db.session.rollback()
         return jsonify('Server error: Failed to process request'), 500


@api.route('/login/client', methods=['POST'])
def client_login():
    data = request.json
    email = data.get('email', None)
    username =  data.get('username',None)
    password = data.get('password')
    if email:
        client = Client.query.filter_by(email=email).first()
    elif username:
        client = Client.query.filter_by(username=username).first()
    else:
        return jsonify({"error":"Complete login information"}),400
    try:
        if client:
            login = client.check_password(password)
            if login:
                return({"message":"Allowed"}), 201
            else:
                return({"message":"Check your username/email and password"}),400
        return ({"message":"Email/username not found"}),400
    except DataError as e:
        db.session.rollback()
        return jsonify('Bad Request: Incorrect data format/type'),400
    except Exception as e:
         db.session.rollback()
         return jsonify('Server error: Failed to process request'), 500
    
@api.route('/login/restaurant', methods=['POST'])
def restaurant_login():
    data = request.json
    email = data.get('email', None)
    username =  data.get('username',None)
    password = data.get('password')
    if email:
        restaurant = Restaurant.query.filter_by(email=email).first()
    elif username:
        restaurant = Restaurant.query.filter_by(username=username).first()
    else:
        return jsonify({"error":"Complete login information"}),400
    try:
        if restaurant:
            login = restaurant.check_password(password)
            if login:
                return({"message":"Allowed"}), 201
            else:
                return({"message":"Check your username/email and password"}),400
        return ({"message":"Email/username not found"}),400
    except DataError as e:
        db.session.rollback()
        return jsonify('Bad Request: Incorrect data format/type'),400
    except Exception as e:
         db.session.rollback()
         return jsonify('Server error: Failed to process request'), 500