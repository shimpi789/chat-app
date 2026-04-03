# 💬 Chatly – Real-Time Chat Application

A full-stack **WhatsApp-style real-time chat application** built using the MERN stack with modern tools and real-time communication.

This project demonstrates real-world full-stack development including authentication, real-time messaging, image uploads, and deployment.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based)
* 💬 1:1 Real-time Messaging using Socket.io
* 🟢 Online/Offline User Status
* 🖼️ Image Sharing via Cloudinary
* 🔍 User Search Functionality
* 📱 Fully Responsive UI (Mobile + Desktop)
* ⚡ Smooth state management using Redux Toolkit

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB + Mongoose

### Real-Time

* Socket.io

### Cloud

* Cloudinary (Image Uploads)

---

## 🌐 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 📂 Project Structure

```
chat-app/
│
├── frontend/       # React + Redux frontend
├── backend/        # Express + MongoDB backend
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
```

---

## 🧪 Run Locally

### 1. Clone the repository

```
git clone https://github.com/your-username/chat-app.git
```

### 2. Install dependencies

```
cd backend
npm install

cd ../frontend
npm install
```

### 3. Run the app

```
# backend
npm run dev

# frontend
npm run dev
```

---

## 💡 Key Learnings

* Implemented JWT-based authentication across frontend & backend
* Managed global state using Redux Toolkit
* Built real-time messaging using Socket.io
* Handled file uploads with Cloudinary
* Solved CORS & deployment issues (Vercel + Render)
* Understood production-level API security using headers

---

## 🚀 Future Improvements

* Typing Indicators
* Message Seen/Delivered Status
* Notifications
* Dark Mode
* Group Chats

---

## 🙌 Acknowledgement

Inspired by real-world chat applications and built as a full-stack MERN learning project.

---

## 👩‍💻 Author

**Shimpi Rajawat**
Full Stack Developer (MERN)

---
