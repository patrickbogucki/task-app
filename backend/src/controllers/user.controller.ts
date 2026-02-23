import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// Mock middleware replacement for getting "me" based on an ID passed in headers
export const getMe = async (req: Request, res: Response): Promise<void> => {
    try {
        // In a real app, req.user would be populated by the auth JWT middleware.
        // For Phase 1 testing, we'll read a mock 'x-user-id' header.
        const userId = req.headers['x-user-id'] as string;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized: Missing x-user-id header' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                location: true
            }
        });

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('getMe error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany({
            include: {
                location: true
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.error('getAllUsers error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
