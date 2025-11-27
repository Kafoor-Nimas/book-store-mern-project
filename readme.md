# 📚 Full-Stack Bookstore MERN Application

A modern, full-featured bookstore application built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring authentication, state management, and a responsive UI.

The app uses Tailwind CSS for styling, Firebase for authentication support , JWT token authentication, Redux Toolkit for state management, and local image storage on the server (no Multer or external upload services).

_(Home)_
![Project Preview](frontend/public/home.png)

_(Cart)_
![Project Preview](frontend/public/cart.png)

# Features

Authentication

User registration & login

JWT-based authentication & authorization

Protected routes for admin/user roles

Secure password hashing with bcrypt

# Book Management

Add new books (with local image storage on server)

Update book details

Delete books

Fetch single/multiple books

filter functionalities

# 🛠️ Tech Stack

Frontend

React - UI library
Redux Toolkit - State management
Tailwind CSS - Styling and responsive design
React Router - Navigation and routing

Backend

Node.js - Runtime environment
Express.js - Web application framework
MongoDB - Database
Mongoose - MongoDB object modeling

Authentication & Security

Firebase - Authentication service
JWT (JSON Web Tokens) - Token-based authentication
bcrypt - Password hashing (if applicable)

# 📋 Prerequisites

Before running this application, make sure you have the following installed:

Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas account)
npm or yarn package manager
Firebase account with a project set up

# Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kafoor-Nimas/book-store-mern-project.git
   cd book-store-mern-project
   ```

2. Backend Setup

cd backend

npm install

npm run start

Create a .env file in the backend directory:

MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

3. Frontend Setup

cd frontend

npm install

npm run dev

App will run at:

Frontend: http://localhost:5173

Backend: http://localhost:5000

# 🛡 Security

Passwords hashed using bcrypt

JWT tokens stored securely

Protected routes using middleware

Local image storage with safe paths

## 🚀 Live Demo

[https://your-bookstore-live-link.com](https://your-bookstore-live-link.com) _(Update with your deployed link)_

# 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

# 👤 Author

Kafoor Nimas

GitHub: @Kafoor-Nimas

LinkedIn: www.linkedin.com/in/nimas-kafoor

Email: nimaskafoor@gmail.com

🙏 Acknowledgments

Firebase for authentication services

MongoDB for database solutions

Tailwind CSS for the styling framework

Redux Toolkit for state management
