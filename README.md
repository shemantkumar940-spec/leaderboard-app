# Leaderboard Assignment

## Overview
A full-stack leaderboard system built with:
- **Frontend:** ReactJS (Vite)
- **Backend:** NodeJS (Express) + MongoDB

## Features
- User selection and addition
- Claim random points (1-10) for users (each user can claim only once)
- Dynamic leaderboard with real-time ranking
- Claim history tracking
- Responsive, modern UI for mobile, tablet, and desktop

## How to Run

### Prerequisites
- Node.js v20 LTS
- MongoDB (local or cloud)

### Backend Setup
1. Open a terminal and navigate to the `server` folder:
   ```bash
   cd server
   npm install
   ```
2. Start MongoDB locally (default: mongodb://localhost:27017/leaderboard)
3. Start the backend server:
   ```bash
   npm run dev
   ```
4. (Optional) Initialize users by visiting:
   - [http://localhost:5000/init-users](http://localhost:5000/init-users)

### Frontend Setup
1. In the project root, install frontend dependencies:
   ```bash
   npm install
   ```
2. Start the frontend:
   ```bash
   npm run dev
   ```
3. Open the browser at the address shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

## API Endpoints
- `GET /users` — Get leaderboard
- `POST /users` — Add user
- `POST /claim` — Claim points (only once per user)
- `GET /history` — Claim history

## Notes
- Each user can only claim points once. Further claims are blocked.
- All claim actions are recorded in the claim history collection.
- The UI is custom-built and not copied from any public GitHub repository.

---

**Submission:**
- All code is original and well-commented.
- Responsive and optimized for all devices.
- To upload to GitHub, push the entire folder (including `server`, `src`, `.github`, and this `README.md`).
- Fill out the Round 1 Task Submission Form as per instructions.
