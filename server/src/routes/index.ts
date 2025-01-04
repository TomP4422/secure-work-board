import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import authRoutes from './auth-routes.js';

const router = Router();

// Public routes
router.use('/auth', authRoutes);

// Protected routes
router.use('/tasks', authenticateToken);

export default router;
