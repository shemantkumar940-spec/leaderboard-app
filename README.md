
# Leaderboard App

Link - > https://leaderboardapp11.netlify.app/

## Overview
A full-stack leaderboard application that allows users to claim points, view dynamic rankings, and track claim history. Built with:
- **Frontend:** ReactJS (Vite)
- **Backend:** Node.js (Express)
- **Database:** MongoDB (local or Atlas)

## Features
- Select and add users to the leaderboard
- Claim random points (1-10) for a selected user (each user can claim only once)
- Dynamic leaderboard with real-time ranking updates
- Claim history tracking for all users
- Responsive, modern UI for mobile, tablet, and desktop

## Getting Started

### Prerequisites
- Node.js v20 LTS
- MongoDB (local instance or MongoDB Atlas)

### Backend Setup
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   npm install

3. Start the backend server:
   ```bash
   npm start
   ```
4. (Optional) Initialize users by visiting:
   - [http://localhost:5000/init-users](http://localhost:5000/init-users)

### Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   npm install
   ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```
3. Open your browser at the address shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

## API Endpoints

| Method | Endpoint      | Description                        |
|--------|---------------|------------------------------------|
| GET    | /users        | Get leaderboard                     |
| POST   | /users        | Add a new user                      |
| POST   | /claim        | Claim points (once per user)        |
| GET    | /history      | Get claim history                   |

## Notes
- Each user can only claim points once. Further claims are blocked.
- All claim actions are recorded in the claim history collection.
- The UI is custom-built and not copied from any public repository.

---

## Submission Checklist
- [x] All code is original and well-commented
- [x] Responsive and optimized for all devices
- [x] Project structure is clean (`server`, `client`, etc.)
- [x] This `README.md` is complete and up to date

---

