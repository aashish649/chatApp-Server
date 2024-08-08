# ChatApp Server

This is the backend server for the ChatApp, built using **Node.js** and **Express**. It provides APIs for authentication, real-time messaging, and media handling, and it connects to a MongoDB database for storing data.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure login and signup using JWT and bcrypt.
- **Real-time Messaging**: Implemented using Socket.IO for bi-directional communication.
- **Media Upload**: Handles image and file uploads using Multer and Cloudinary.
- **Form Validation**: Ensures data integrity with express-validator.
- **CORS**: Cross-Origin Resource Sharing enabled for secure API interaction.
- **Database**: MongoDB for efficient data storage and retrieval.

## Technologies
- **Node.js**: JavaScript runtime for server-side programming.
- **Express**:  - Web framework for building RESTful APIs.
- **MongoDB**:  database for storing user data and chat history.
- **Socket.IO**:  - Real-time communication between server and clients.
- **Multer**: - Middleware for handling `multipart/form-data` (file uploads).
- **Cloudinary**:  - Cloud storage for images and media.
- **bcrypt**:  - Library for hashing and comparing passwords.
- **jsonwebtoken**:  - For securing APIs with JWT tokens.
- **express-validator**:  - Middleware for validating incoming requests.
- **dotenv**:  - Environment variables management.
- **cors**:  - Middleware to enable CORS.
- **cookie-parser**:  - Middleware to parse cookies.
- **uuid**:  - For generating unique identifiers.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/chatapp-server.git
    cd chatapp-server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary variables (see [Environment Variables](#environment-variables) below).
   

5. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000` by default.


## Environment Variables

Ensure that you have the following environment variables set up in your `.env` file:

```plaintext
PORT=5000
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
```
## Usage

- **API Endpoints**:
  - `/api/auth/signup` - User signup
  - `/api/auth/login` - User login
  - `/api/messages` - Send and receive messages
  - `/api/upload` - Upload files or images

- **Real-time Chat**:
  - The server listens for incoming chat messages and broadcasts them to all connected clients using Socket.IO.



## Project Structure

```plaintext
├── config
│   ├── cloudinary.js
│   ├── database.js
├── controllers
│   ├── authController.js
│   ├── chatController.js
├── middlewares
│   ├── authMiddleware.js
│   ├── validationMiddleware.js
├── models
│   ├── User.js
│   ├── Message.js
├── routes
│   ├── authRoutes.js
│   ├── chatRoutes.js
├── utils
│   ├── generateToken.js
├── .env
├── .gitignore
├── server.js
└── package.json
