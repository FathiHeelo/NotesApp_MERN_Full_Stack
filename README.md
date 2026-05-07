NotesApp MERN Full Stack

📌 Overview

This project is a complete full-stack Notes Application built using the MERN Stack architecture.

The system allows users to:

Create notes
Read all notes
View single note details
Update notes
Delete notes
Insert multiple notes at once

The project was designed with a clean and scalable architecture while integrating modern backend and frontend technologies.

🧠 Architecture & Technologies
🔹 Backend

Built using:

Node.js
Express.js
MongoDB Atlas
Mongoose
Upstash Redis
Upstash Rate Limiting
dotenv
CORS
🔹 Frontend

Built using:

React
Vite
Axios
React Router DOM
Custom Modern UI Theme
🚀 Core Features
🔹 Full CRUD Operations

The application supports:

Create Note
Read Notes
Read Single Note
Update Note
Delete Note

through REST APIs.

🔹 REST API Integration

The frontend communicates with the backend using Axios and structured API endpoints.

Examples:

GET /api/Notes
POST /api/Notes
PUT /api/Notes/:id
DELETE /api/Notes/:id
🔹 MongoDB Integration

The application uses MongoDB Atlas as the cloud database solution.

Features include:

Mongoose schemas
Data validation
Timestamps
Structured document storage
🔹 Rate Limiting Protection

Implemented using:

Upstash Redis
Upstash RateLimit

Features:

IP-based request limiting
Protection against spam requests
Sliding window rate limiting strategy
🔹 Interactive Frontend UI

Modern dark-themed interface featuring:

Black background
Neon green accents
Interactive hover effects
Responsive cards
Animated transitions
Smooth user experience
🛠️ Project Structure
backend/
 ├── config/
 ├── middleware/
 ├── models/
 ├── router/
 ├── controllers/
 └── server.js

frontend/
 ├── src/
 │   ├── api/
 │   ├── components/
 │   ├── pages/
 │   └── styles/
🔥 Backend Highlights
🔹 Express Middleware

Implemented middleware for:

JSON parsing
Request logging
Rate limiting
Error handling
🔹 Mongoose Models

The Note schema includes:

title
content
timestamps

with validation support.

🔹 Bulk Insert Support

Supports inserting multiple notes in a single request using:

POST /api/Notes/many
🎨 Frontend Highlights
🔹 React Router

Implemented multiple pages:

Home
Create Note
Edit Note
Note Details
🔹 Axios API Layer

Centralized Axios configuration using:

axios.create()

for clean API communication.

🔹 Modern UI Design

The frontend includes:

Responsive layout
Interactive note cards
Smooth animations
Custom dark/green theme
User-friendly forms
📚 What I Learned
Building a complete MERN stack application
Creating scalable REST APIs
MongoDB integration with Mongoose
Middleware architecture in Express
API rate limiting using Redis
Frontend/backend integration
Managing asynchronous operations
Structuring full-stack applications cleanly
👨‍💻 Author

Developed by:
Fathi Heelo 🚀
