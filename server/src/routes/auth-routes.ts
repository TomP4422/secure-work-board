import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Fetch the user from the database
    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    res.json({ token });
    return;
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred during login' });
    return;
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
