# Preethi Rajendran - Full-Stack Personal Portfolio

A modern, responsive, full-stack personal portfolio for **Preethi Rajendran** (MCA Student & Aspiring IT Professional) built with **React.js (Vite)** on the frontend and **Node.js (Express.js)** on the backend.

---

## 📁 Project Architecture & Folder Structure

```text
My Portfolio/
├── .codegraph/                  # Preserved CodeGraph setup
├── legacy-backup/               # Safe untouched backup of original static files
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── profile.jpg
│
├── backend/                     # Node.js + Express.js backend API
│   ├── data/
│   │   └── messages.json        # Verified local JSON storage for contact inquiries
│   ├── server.js                # Express server with POST /api/contact & GET /api/messages
│   └── package.json             # Backend dependencies (express, cors)
│
├── frontend/                    # React.js + Vite frontend application
│   ├── public/
│   │   └── profile.jpg          # Profile photo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky navbar, scroll spy & mobile drawer
│   │   │   ├── Hero.jsx         # Hero section with headline, badges & links
│   │   │   ├── About.jsx        # About narrative & focus cards
│   │   │   ├── Skills.jsx       # Categorised technical skills
│   │   │   ├── Experience.jsx   # Data Science & ML Internship timeline
│   │   │   ├── Projects.jsx     # Pet Adoption Portal & IoT Passenger Bridge
│   │   │   ├── ProjectModal.jsx # Architecture modal for system details
│   │   │   ├── Education.jsx    # MCA, BCA, Intermediate & 10th timeline
│   │   │   ├── Certifications.jsx # Microsoft, IBM, AWS, NPTEL, GFG cards
│   │   │   ├── Contact.jsx      # Connected interactive contact form (POST API)
│   │   │   └── Footer.jsx       # Footer & back-to-top button
│   │   ├── App.jsx              # Main App root component
│   │   ├── index.css            # Preserved design system, typography & animations
│   │   └── main.jsx             # React DOM entry point
│   ├── index.html               # Vite HTML template with Google Fonts & FontAwesome
│   ├── vite.config.js
│   └── package.json             # Frontend dependencies (react, react-dom, vite)
│
└── package.json                 # Convenient root scripts to run frontend & backend
```

---

## 🚀 How to Run the Project

### 1. Start the Backend Server (Port 5000)
Open a terminal in your project directory and run:
```bash
npm run backend
```
*(Or directly `cd backend && npm start`)*.  
The Express backend starts at **`http://localhost:5000`**.

### 2. Start the Frontend Application (Vite Dev Server)
Open a second terminal in your project directory and run:
```bash
npm run frontend
```
*(Or directly `cd frontend && npm run dev`)*.  
The React app will start at **`http://localhost:5173`** (or the URL printed in the terminal).

---

## 🛠️ Key Features Implemented

1. **Exact Design & Content Preservation**:
   - Muted lavender, soft blue, and deep navy palette.
   - All resume facts: MCA (Pursuing), BCA Data Science, Intermediate (MPC), 10th (ICSE), certifications, and internship deliverables.
   - Profile photo and floating achievement badges.
2. **Server-Side Validation**:
   - `name`, `email`, `subject`, and `message` validation in Express.
   - Standard regex email format checking and minimum length checks.
3. **Local Message Storage**:
   - Inquiries sent through the form are safely stored in `backend/data/messages.json`.
   - Verified through automated API tests.
4. **Interactive Architecture Modals**:
   - Reusable modal dialogs displaying system diagrams and architectural highlights for both featured projects.

