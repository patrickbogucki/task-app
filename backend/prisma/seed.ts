import { PrismaClient, Role, Priority, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database with realistic test data...');

    // --- 1. Create Locations (Stores) ---
    const seattleStore = await prisma.location.create({
        data: { name: 'Store #0142', address: 'Seattle, WA' },
    });
    const portlandStore = await prisma.location.create({
        data: { name: 'Store #0221', address: 'Portland, OR' },
    });
    const chicagoStore = await prisma.location.create({
        data: { name: 'Store #0881', address: 'Chicago, IL' },
    });
    const miamiStore = await prisma.location.create({
        data: { name: 'Store #1042', address: 'Miami, FL' },
    });

    // --- 2. Create Users ---
    const janeHQ = await prisma.user.create({
        data: {
            name: 'Jane Director',
            email: 'jane.hq@taskapp.com',
            role: Role.Headquarters,
            access_level: 3,
        },
    });

    const sarahManager = await prisma.user.create({
        data: {
            name: 'Sarah Manager',
            email: 'sarah.seattle@taskapp.com',
            role: Role.StoreLead,
            access_level: 2,
            location_id: seattleStore.id,
        },
    });

    const jessicaEducator = await prisma.user.create({
        data: {
            name: 'Jessica Lee',
            email: 'jessica.seattle@taskapp.com',
            role: Role.Educator,
            access_level: 1,
            location_id: seattleStore.id,
        },
    });

    const mikeEducator = await prisma.user.create({
        data: {
            name: 'Mike Torres',
            email: 'mike.seattle@taskapp.com',
            role: Role.Educator,
            access_level: 1,
            location_id: seattleStore.id,
        },
    });

    // Assign store managers to their locations for direct lookup
    await prisma.location.update({
        where: { id: seattleStore.id },
        data: { store_manager_id: sarahManager.id },
    });

    // --- 3. Create Tasks ---

    // HQ Campaign: Merchandising Update
    const q3MerchTask = await prisma.task.create({
        data: {
            title: 'Q3 Visual Merchandising Update',
            description: 'Please update the front window displays with the new Q3 promotional materials delivered this week. Follow the attached planogram exactly.',
            created_by: janeHQ.id,
            assigned_to_role: [Role.StoreLead],
            due_date: new Date(new Date().setHours(17, 0, 0, 0)), // Today 5PM
            priority: Priority.High,
            status: Status.InProgress,
            ack_required: true,
            require_photo_proof: true,
            attachment_url: 'fall-planogram-q3.pdf',
            location_assignments: {
                create: [
                    { location_id: seattleStore.id }, // In Progress
                    { location_id: portlandStore.id }, // Completed
                    { location_id: chicagoStore.id }, // Overdue
                    { location_id: miamiStore.id }, // Acknowledged
                ]
            }
        },
    });

    // Delegation of Q3 Merch Task by Sarah to Jessica
    await prisma.task.create({
        data: {
            title: 'Window Display Q3',
            description: 'Hey Jess, please make sure the lighting is hitting the main mannequin exactly like the diagram shows. Text me if the vinyl doesn\'t stick.',
            created_by: sarahManager.id,
            assigned_to_role: [Role.Educator],
            due_date: new Date(new Date().setHours(17, 0, 0, 0)),
            priority: Priority.High,
            status: Status.NotStarted,
            delegated_from_task_id: q3MerchTask.id,
            store_leader_approval_required: true,
            require_photo_proof: true,
            user_assignments: {
                create: { user_id: jessicaEducator.id }
            },
            location_assignments: {
                create: { location_id: seattleStore.id }
            }
        }
    });

    // Store-level Task (Non-HQ)
    await prisma.task.create({
        data: {
            title: 'Morning Fitting Room Clear',
            description: 'Clear all items, sweep floors, check mirrors.',
            created_by: sarahManager.id,
            assigned_to_role: [Role.Educator],
            due_date: new Date(new Date().setHours(11, 0, 0, 0)),
            priority: Priority.Medium,
            status: Status.NotStarted,
            user_assignments: {
                create: { user_id: jessicaEducator.id }
            },
            location_assignments: {
                create: { location_id: seattleStore.id }
            }
        }
    });

    console.log('Database seeded successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
