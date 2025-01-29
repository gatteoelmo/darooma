import axios from "axios";

const API = axios.create({
    baseURL: "https://daroomaapi.onrender.com/api",
});

export const createAccount = async (data) => API.post("/users/register", data);
export const login =   async (data) => API.post("/users/login", data);
export const getGoals = async (token) => 
    API.get(`/goals/userDashboard`, { headers: { Authorization: token } });
export const createGoal = async (data, token) =>
    API.post('/goals/create', data, { headers: { Authorization: token } });
export const completeGoal = async (id, token) =>
    API.patch(`/goals/success/${id}`, {}, { headers: { Authorization: token } });
export const deleteGoal = async (id, token) =>
    API.delete(`/goals/delete/${id}`, { headers: { Authorization: token } });