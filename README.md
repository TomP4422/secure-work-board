# Secure Work Board

## Description
Secure Work Board is a full-stack Kanban board application designed for task management. The app includes robust authentication features implemented using JSON Web Tokens (JWT), ensuring a secure user experience. Users can log in, manage their tasks in different states, and securely access application data.

## Features
- **Authentication**: User login and logout with JWT-based authentication.
- **Task Management**: Create, update, and organize tasks across different states (e.g., To-Do, In Progress, Done).
- **Session Management**: Automatic session expiration for inactive users.
- **Secure API**: Protected API endpoints accessible only by authenticated users.
- **Responsive Design**: A user-friendly interface adaptable to various screen sizes.

## Installation
### Prerequisites
- Node.js (>= 14.x)
- PostgreSQL

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd secure-work-board
   ```
2. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `server` directory based on `.env.EXAMPLE`:
     ```
     DB_NAME=kanban_db
     DB_USER=<your_database_user>
     DB_PASSWORD=<your_database_password>
     JWT_SECRET_KEY=<your_secret_key>
     PORT=5000
     ```
   - Replace placeholders with actual values.
4. Run database migrations:
   ```bash
   cd server
   npx sequelize-cli db:migrate
   ```
5. Start the application:
   - Start the server:
     ```bash
     npm start
     ```
   - Start the client:
     ```bash
     cd ../client
     npm start
     ```

## Usage
1. Navigate to `http://localhost:3000` in your browser.
2. Log in using valid credentials or create a new account (if supported).
3. Access and manage tasks on the Kanban board.

## Deployment
- The application is deployed on [Render](https://render.com).
- Environment variables for the server should be configured in Render's settings.

## Technologies Used
- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [JWT](https://jwt.io/)

## Screenshots
Add screenshots here to showcase the app's UI and functionality.

---

Let me know if you'd like to include additional details or modify this README further!

