from flask import Flask, render_template, request, jsonify

import mysql.connector

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'schooldb'
}


# Route: Hello World
@app.route('/hello', methods=['GET'])
def hello():
    return jsonify(message="Hello World!")

@app.route('/users')
def users():
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users")
            users = cur.fetchall()
            return jsonify(users=[{'id': u[0], 'name': u[1], 'email': u[2], 'role': u[3]} for u in users])
        

@app.route('/new_user', methods=['POST'])
def add_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    role = data.get('role')

    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO users (name, email, role) VALUES (%s, %s, %s)", (name, email, role))
            conn.commit()  # Commit the transaction
            return jsonify(message="User added successfully"), 201


    

# Route: Get User by ID
@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users WHERE id = %s", (id,))
            user = cur.fetchone()

            if user:
                return jsonify({'id': user[0], 'name': user[1], 'email': user[2], 'role': user[3]})
            else:
                return jsonify(message="User not found"), 404
            
    

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
