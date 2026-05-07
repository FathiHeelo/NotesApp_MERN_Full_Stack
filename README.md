# 📝 NotesApp MERN Full Stack

## 📌 Overview
This project is a complete full-stack Notes Application built using the MERN Stack architecture.

The system allows users to create, manage, update, and delete notes through a responsive and interactive interface connected to a scalable REST API backend.

Starting from backend API development to frontend integration, the project was designed with a clean and scalable architecture while applying modern full-stack development practices.

---

## 🚀 Core Features

### 🔹 Full CRUD Operations
- Create notes
- Read all notes
- View single note details
- Update notes
- Delete notes

### 🔹 Bulk Insert Support
- Insert multiple notes in a single request
- Efficient batch creation using MongoDB

### 🔹 REST API Integration
- Structured Express REST APIs
- Axios-based frontend communication
- Clean API architecture

### 🔹 MongoDB Integration
- MongoDB Atlas cloud database
- Mongoose schemas and validation
- Timestamp support
- Structured document storage

### 🔹 Rate Limiting Protection
Implemented using:
- Upstash Redis
- Upstash RateLimit

Features:
- IP-based request limiting
- Sliding window strategy
- Spam request prevention

### 🔹 Modern Interactive UI
- Dark modern theme
- Neon green accents
- Responsive layout
- Interactive hover effects
- Smooth animations and transitions

---

## 🛠️ Technologies Used

### 🔹 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Upstash Redis
- Upstash RateLimit
- dotenv
- CORS

### 🔹 Frontend
- React
- Vite
- Axios
- React Router DOM
- Custom CSS

---

## 📂 Project Structure

```bash
backend/
 ├── config/
 ├── middleware/
 ├── models/
 ├── router/
 ├── src/controllers/
 └── server.js

frontend/
 ├── src/
 │   ├── api/
 │   ├── components/
 │   ├── pages/
 │   └── styles/
