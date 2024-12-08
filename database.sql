CREATE DATABASE schooldb;

USE users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, role) VALUES
('John Doe', 'john@example.com', 'Admin'),
('Jane Smith', 'jane@example.com', 'User'),
('Alice Brown', 'alice@example.com', 'Moderator');
