import User from "../models/signup.js";
import bcrypt from 'bcryptjs';

// ───── SIGNUP ─────
const signup = async(req, res) => {
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const result = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User signed up successfully",
            data: {
                id: result._id,
                username: result.username,
                email: result.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// ───── LOGIN ─────
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ 
            message: "Login successful", 
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { signup, login };
