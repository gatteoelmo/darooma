import express from 'express'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import e from 'express';

dotenv.config();

connectDB();

const app = express();
express.json();

app.get('/welcome/', (req, res) => {
    res.send('Welcome in Darooma API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));