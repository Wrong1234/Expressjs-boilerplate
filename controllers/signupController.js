// import User from '../models/signup.js';

import User from "../models/signup.js";

const signup = async(req, res, next) => {
    try {
        const result = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            message: "User signed up successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
}

export default signup;