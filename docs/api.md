# API Endpoints Specification

## Authentication Endpoints

- `POST /api/auth/login` - User login (returns JWT token)
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

## User Management Endpoints

- `GET /api/users` - List all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

## Location Management Endpoints

- `GET /api/locations` - List all locations
- `GET /api/locations/:id` - Get location by ID
- `POST /api/locations` - Create new location (Admin only)
- `PUT /api/locations/:id` - Update location (Admin only)
- `DELETE /api/locations/:id` - Delete location (Admin only)

## Task Management Endpoints

- `GET /api/tasks` - List tasks (filtered by user access level)
- `GET /api/tasks/:id` - Get task by ID with subtasks
- `POST /api/tasks` - Create new task (Admin, Headquarters, Store Lead)
- `PUT /api/tasks/:id` - Update task (Admin, Headquarters (own tasks), Store Lead (own tasks))
- `DELETE /api/tasks/:id` - Delete task (Admin, Headquarters (own tasks), Store Lead (own tasks))
- `POST /api/tasks/:id/acknowledge` - Acknowledge receipt of a task
- `GET /api/tasks/:id/acknowledgements` - Get acknowledgement status for all assignees
- `POST /api/tasks/:id/complete` - Mark task as completed
- `GET /api/tasks/:id/completions` - Get completion status for all assignees
- `POST /api/tasks/:id/reassign` - Reassign a task to a Store Lead (Admin, Headquarters)
- `POST /api/tasks/:id/delegate` - Delegate a task from Store Lead to a role or specific user
