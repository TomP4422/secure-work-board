import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access token is missing or invalid' });
    return; // Ensure function exits after response
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Token is invalid or expired' });
      return; // Ensure function exits after response
    }

    req.user = user as JwtPayload;
    next(); // Proceed to the next middleware
  });

  return; // Explicit return to satisfy TypeScript
};
