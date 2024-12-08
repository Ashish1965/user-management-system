# User Management System

A **User Management System** built using **Flask** (backend) and **Next.js** (frontend). This application provides functionalities for managing users, including viewing user details, adding new users, and retrieving individual user details.

---

## **Features**
- **View Users:** Displays a list of users in an interactive table.
- **Add Users:** Allows users to add new user details (name, email, role) via a form.
- **Retrieve User Details:** Fetch and display details of a specific user.
- **Error Handling:** Proper error responses for invalid requests or missing resources.
- **Responsive UI:** Built with modern styling for a seamless user experience.

---

## **Tech Stack**
- **Frontend:** Next.js
- **Backend:** Flask (Python)
- **Database:** MySQL
- **Styling:** TailwindCSS
- **API Communication:** REST API

---

## **Setup and Installation**

### **Prerequisites**
1. Python 3.x installed on your system.
2. Node.js and npm/yarn installed.
3. MySQL installed and running.

### **Backend Setup (Flask)**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system/backend
2. Run the command:
   ```bash
   python app.py
### **Frontedn Setup (Next.js)**
1. ```bash
   cd user-management-system/frontend
2. Install Dependencies
   ```bash
   npm install
3. Run the command:
   ```bash
   npm run dev
### **Sql Schema**
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(100)
);
### **Configure Database**
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'yourpassword'
app.config['MYSQL_DB'] = 'users'


### **Queries used in Project**
1. For fetching all users : "SELECT * FROM users".
2. For inserting single user : "INSERT INTO users (name, email, role) VALUES (%s, %s, %s)", (name, email, role).
3. For fetching specific user : "SELECT * FROM users WHERE id = %s", (id,).
