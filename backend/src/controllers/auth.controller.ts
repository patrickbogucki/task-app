import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        if (!email) {
            res.status(400).json({ error: 'Email is required' });
            return;
        }

        // Mock Login: Find user by email directly for Phase 1 testing
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                location: true
            }
        });

        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // In a real app, verify password and create JWT here.
        // For Phase 1, we just return the user as the "session".

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                location: user.location,
                // Mock JWT token
                token: 'mock-jwt-token-for-' + user.id
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
