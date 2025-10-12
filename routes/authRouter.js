import express from 'express';
import { signup, login } from '../controllers/userController.js';
import { registerValidation, loginValidation } from '../validators/userValidators.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const router = express.Router();

// ───── User Routes ─────
router.post('/signup', validateRequest(registerValidation), signup);
router.post('/login', validateRequest(loginValidation), login);
// router.put('/update', validateRequest(updateUserValidation), updateProfile);

export default router;
