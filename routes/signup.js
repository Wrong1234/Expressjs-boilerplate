import express from 'express';
import signup from '../controllers/signupController.js';


const hostRouter = express.Router();
// const { signup } = require('../controllers/signupController');

hostRouter.post("/signup", signup);

export default hostRouter;