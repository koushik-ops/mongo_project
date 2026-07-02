# 🛒 MongoDB Supermarket Management System

A full-stack backend application built using **Node.js**, **Express.js**, and **MongoDB** for managing supermarket operations efficiently. The project demonstrates CRUD operations, database integration, and RESTful API development.

---

## 🚀 Features

- 📦 Product Management
- 👥 Customer Management
- 🛒 Order Management
- 📊 Inventory Tracking
- 🔍 Search and Filter Functionality
- 🗄️ MongoDB Database Integration
- 🌐 RESTful API Architecture
- ⚡ Fast and Scalable Backend

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- REST API
- Postman

---

## 📂 Project Structure

```text
mongo_project/
│
├── config/
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── package.json
├── package-lock.json
├── app.js
├── server.js
└── README.md
```

---

## 📥 Installation

### Clone the repository

```bash
git clone https://github.com/koushik-ops/mongo_project.git
```

### Navigate to the project directory

```bash
cd mongo_project
```

### Install dependencies

```bash
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://localhost:27017/supermarket_db
PORT=5000
```

---

## ▶️ Running the Application

Start MongoDB:

```bash
mongod
```

Start the application:

```bash
npm start
```

or

```bash
node server.js
```

Server output:

```text
Server running on http://localhost:5000
MongoDB connected successfully
```

---

## 🌐 API Endpoints

### Products

```http
GET    /products
POST   /products
PUT    /products/:id
DELETE /products/:id
```

### Customers

```http
GET    /customers
POST   /customers
PUT    /customers/:id
DELETE /customers/:id
```

### Orders

```http
GET    /orders
POST   /orders
PUT    /orders/:id
DELETE /orders/:id
```

---

## 🗄️ Database Schema

### Product

- Product Name
- Category
- Price
- Quantity
- Description

### Customer

- Name
- Email
- Phone Number
- Address

### Order

- Customer Details
- Product Details
- Total Amount
- Order Status

---

## 🧪 Testing

API endpoints can be tested using:

- Postman
- Thunder Client
- cURL

---

## 📈 Future Improvements

- JWT Authentication
- Admin Dashboard
- Payment Gateway Integration
- Sales Analytics
- Invoice Generation
- Email Notifications
- Role-Based Access Control

---

## 👨‍💻 Author

**Koushik Deb**

GitHub: https://github.com/koushik-ops

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

---

## 📄 License

This project is developed for educational and learning purposes.
