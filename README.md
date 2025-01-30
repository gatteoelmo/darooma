# Darooma - Your Goal-Tracking App


<img src="./darooma-frontend/src/assets/img/logo font.svg" alt="Descrizione dell'immagine" width="300"/>
Darooma is a friendly and motivational app inspired by the Japanese Daruma doll, designed to help you set, track, and achieve your goals. Whether you're tackling personal challenges or creating objectives for group activities like Dungeons & Dragons, Darooma is here to keep you on track and level up your journey!

---

## Features

### **Core Functionalities**

- **User Authentication**: Secure login and registration system using JWT.
- **Create Goals**: Easily define goals with title, description, difficulty, and a deadline.
- **Progress Tracking**: Mark goals as completed and earn experience points (XP) to track your growth.
- **Level System**: Gain XP as you complete goals and watch your level rise.
- **Dashboard**: Manage all your goals in one clean and organized view.

### **Tech Stack**

- **Frontend**: React, React Router, Redux for state management, styled components, react-query for data fetching, react-hook-form for form handling, react-icons for icons.
- **Backend**: Node.js, Express, and MongoDB for the database.
- **API**: RESTful endpoints for user management and goal operations.
- **Others**: React Query for data fetching and Axios for HTTP requests.

---

## Setup Guide

### **Requirements**

- Node.js (v16 or higher)
- MongoDB

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/darooma.git
   cd darooma
   ```

2. **Backend Setup**

   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file:
     ```
     PORT=1234
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**

   - Navigate to the `client` directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm run dev
     ```

4. **Access the App**
   - Open your browser and go to `http://localhost:5173`.

---

## API Endpoints

### **Authentication**

- **POST** `/api/user/register`: Register a new user.
- **POST** `/api/user/login`: Log in a user and receive a JWT token.

### **Goals**

- **GET** `/api/goals/userDashboard`: Fetch all user goals.
- **POST** `/api/goals/create`: Create a new goal.
- **PATCH** `/api/goals/success/:id`: Mark a goal as complete and earn XP.
- **DELETE** `/api/goals/delete/:id`: Delete a goal.

---

## File Structure

```
Darooma/
├── client/        # Frontend files
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Pages (Home, Dashboard, etc.)
│   ┒── styles/      # Global styles
├── server/        # Backend files
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API routes
│   ├── middleware/  # Auth middleware
│   ┒── controllers/ # Logic for API endpoints
```

---

## Future Improvements

- Add social login options.
- Implement notifications for deadlines.
- Introduce a leaderboard to compare progress with friends.
- Support for group goals and collaborative tracking.

---

## Contributing

Feel free to submit issues or pull requests. We'd love to see your contributions!

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgments

Thanks to the entire Darooma team and community for your support and feedback. Let's achieve our goals together!

<!-- CONTACT -->

## Contact

- Website - [SOYA](https://gatteoelmo.github.io/soya/)
- Github - [@gatteoelmo](https://github.com/gatteoelmo)
- Linkedin - [Matteo Gallardo](www.linkedin.com/in/matteo-gallardo-091562285)

Project Link: [https://github.com/gatteoelmo/tongue-RESTApi.git](https://github.com/gatteoelmo/tongue-RESTApi.git)
