from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

users = []

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    user = {
        'username': username,
        'password': password,
        'email': email
    }
    users.append(user)
    return json.dumps(user)



if __name__ == '__main__':
    app.run(debug=True)