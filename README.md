# Let's Poll It

**Let's Poll It** is a modern, AI-powered polling platform where users can create and participate in polls after authentication. It features stateless authentication, AI-generated location-based polls, and clean data visualizations using Chart.js.

---

## Features

- **User Authentication**
  - Secure, stateless authentication system using JWT.
  - Users can create and vote on polls only after login.

- **Create & Share Polls**
  - Users can generate polls with unique keys.
  - Simple and intuitive UI for poll creation and sharing.

- **AI-Generated Location-Based Polls**
  - Integrated AI (via Gemini API) to suggest polls based on user location or trends.
  - Increases engagement by making polls relevant and contextual.

- **Data Visualization**
  - Uses Chart.js to display poll results as interactive charts.
  - Helps users understand voting trends at a glance.

---

## Tech Stack

- **Frontend**: React  
- **Backend**: Express.js  
- **Authentication**: JWT (stateless)  
- **AI Integration**: Gemini API  
- **Charting Library**: Chart.js  
- **Database**: MongoDB
---

## How It Works

1. User logs in and receives a JWT token.
2. Authenticated user creates a poll and gets a unique key.
3. Other users access the poll via the key and vote.
4. Responses are stored securely and visualized via Chart.js.

---


