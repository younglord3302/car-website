import { Router } from 'express';
import { register, login, logout, getProfile, updateProfile, changePassword } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// POST /api/auth/register - Register new user
router.post('/register', register);

// POST /api/auth/login - Login user
router.post('/login', login);

// POST /api/auth/logout - Logout user
router.post('/logout', logout);

// GET /api/auth/profile - Get current user profile (protected)
router.get('/profile', authenticateToken, getProfile);

// PATCH /api/auth/profile - Update user profile (protected)
router.patch('/profile', authenticateToken, updateProfile);

// POST /api/auth/change-password - Change user password (protected)
router.post('/change-password', authenticateToken, changePassword);

export default router;
