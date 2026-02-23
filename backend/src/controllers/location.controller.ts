import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getLocations = async (req: Request, res: Response): Promise<void> => {
    try {
        const locations = await prisma.location.findMany({
            include: {
                store_manager: { select: { id: true, name: true, email: true } },
            },
            orderBy: { name: 'asc' }
        });

        res.status(200).json(locations);
    } catch (error) {
        console.error('getLocations error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getLocationById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;

        const location = await prisma.location.findUnique({
            where: { id },
            include: {
                store_manager: { select: { id: true, name: true, email: true } },
                users: { select: { id: true, name: true, role: true } },
            }
        });

        if (!location) {
            res.status(404).json({ error: 'Location not found' });
            return;
        }

        res.status(200).json(location);
    } catch (error) {
        console.error('getLocationById error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getLocationCompliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;

        // Simplified compliance calculation for Phase 1
        // Fetch tasks assigned to this location
        const locationTasks = await prisma.task.findMany({
            where: { location_assignments: { some: { location_id: id } } }
        });

        if (locationTasks.length === 0) {
            res.status(200).json({
                location_id: id,
                compliance_score: 100, // Or N/A if 0 tasks
                total_tasks: 0,
                completed_tasks: 0
            });
            return;
        }

        const totalTasks = locationTasks.length;
        const completedTasks = locationTasks.filter(t => t.status === 'Completed').length;
        const complianceScore = Math.round((completedTasks / totalTasks) * 100);

        res.status(200).json({
            location_id: id,
            compliance_score: complianceScore,
            total_tasks: totalTasks,
            completed_tasks: completedTasks
        });

    } catch (error) {
        console.error('getLocationCompliance error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
