# MongoDB Connection Project

A simple Node.js application demonstrating how to establish a connection between a Node.js application and a MongoDB database using Mongoose.

## Features

- MongoDB database connection using Mongoose
- Connection status logging
- Simple project structure
- Beginner-friendly implementation
- Demonstrates backend database connectivity

## Technologies Used

- Node.js
- MongoDB
- Mongoose
- JavaScript

## Project Structure

```text
mongo_project/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/koushik-ops/mongo_project.git
```

Navigate to the project directory:

```bash
cd mongo_project
```

Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/mydatabase
```

## Run the Project

```bash
node index.js
```

Expected output:

```text
MongoDB Connected Successfully
Server Running on Port 5000
```

## Learning Outcomes

- Understanding MongoDB connection setup
- Using Mongoose in Node.js
- Managing environment variables
- Backend project initialization

## Author

**Koushik Deb**

GitHub: https://github.com/koushik-ops

## License

This project is developed for educational and learning purposes.
