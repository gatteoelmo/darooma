import axios from "axios";

const API = axios.create({
    baseURL: "https://daroomaapi.onrender.com/api",
});

export const createAccount = (data) => API.post("/users/register", data);
export const login = (data) => API.post("/users/login", data);
export const getGoals = (token) => 
    API.get(`/goals/userDashboard`, { headers: { Authorization: token } });
export const createGoal = (data, token) =>
    API.post('/goals/create', data, { headers: { Authorization: token } });
  export const completeGoal = (id, token) =>
    API.patch(`/goals/success/${id}`, {}, { headers: { Authorization: token } });