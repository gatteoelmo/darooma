import express from 'express';
import { GoalController } from '../controllers/goalController.js';

const router = express.Router();

router.post('/create', GoalController.createGoal);
router.get('/', GoalController.getAllGoals);

export default router;