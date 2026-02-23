import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { role, status, location_id } = req.query;

        // Build conditional filter based on query params
        const whereClause: any = {};

        if (status) {
            whereClause.status = status as string;
        }

        // Fetch tasks
        const tasks = await prisma.task.findMany({
            where: whereClause,
            include: {
                creator: { select: { name: true, role: true } },
                location_assignments: true,
                user_assignments: true,
            },
            orderBy: { due_date: 'asc' }
        });

        // Additional filtering by role/location might be complex with Prisma relational filters
        // For Phase 1, basic retrieval is sufficient.

        res.status(200).json(tasks);
    } catch (error) {
        console.error('getTasks error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;

        const task = await prisma.task.findUnique({
            where: { id },
            include: {
                creator: { select: { name: true, role: true, location_id: true } },
                location_assignments: { include: { location: true } },
                user_assignments: { include: { user: true } },
                delegated_tasks: true,
            }
        });

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.status(200).json(task);
    } catch (error) {
        console.error('getTaskById error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        // Assume basic body structure for Phase 1 testing
        const { title, description, due_date, priority, assigned_to_role, location_ids, attachment_url, require_photo_proof } = req.body;

        // Mock auth header
        const userId = req.headers['x-user-id'] as string;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                due_date: due_date ? new Date(due_date) : null,
                priority: priority || 'Medium',
                assigned_to_role: assigned_to_role || [],
                attachment_url,
                require_photo_proof: require_photo_proof || false,
                created_by: userId,
                // Create location assignments if provided
                location_assignments: location_ids ? {
                    create: location_ids.map((id: string) => ({ location_id: id }))
                } : undefined,
            }
        });

        res.status(201).json(task);
    } catch (error) {
        console.error('createTask error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateTaskStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const { status, photo_url } = req.body;
        const userId = req.headers['x-user-id'] as string;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const task = await prisma.task.update({
            where: { id },
            data: { status }
        });

        // Record completion if status is Completed
        if (status === 'Completed') {
            await prisma.taskCompletion.create({
                data: {
                    task_id: id,
                    user_id: userId,
                    photo_url: photo_url || null
                }
            });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error('updateTaskStatus error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const delegateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string; // Parent task ID
        const { assigned_user_id, notes, store_leader_approval_required } = req.body;
        const userId = req.headers['x-user-id'] as string;

        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const parentTask = await prisma.task.findUnique({ where: { id } });
        if (!parentTask) {
            res.status(404).json({ error: 'Parent task not found' });
            return;
        }

        // Create the delegated sub-task
        const delegatedTask = await prisma.task.create({
            data: {
                title: parentTask.title,
                description: notes || parentTask.description,
                due_date: parentTask.due_date,
                priority: parentTask.priority,
                assigned_to_role: ['Educator'],
                created_by: userId,
                delegated_from_task_id: id,
                store_leader_approval_required: store_leader_approval_required || false,
                require_photo_proof: parentTask.require_photo_proof,
                user_assignments: {
                    create: { user_id: assigned_user_id }
                }
            }
        });

        res.status(201).json(delegatedTask);
    } catch (error) {
        console.error('delegateTask error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
