# Task App Planning

# App summary

This app will be used by store managers and headquarters teams to create and delegate tasks to locations and employees.

Tasks can include subtasks. Assignees can see completion status (who has and has not completed).

# Core requirements

- Create tasks (including subtasks)
- Assign tasks to:
    - Locations
    - Roles
    - Specific users
- Track completion per assignee, plus overall completion status
- **HQ → Store receipt + delegation:** when HQ assigns a task to a location/store, the **Store Lead** must acknowledge receipt, then either complete it themself or delegate it to a role or specific user for completion
- **Assignee acknowledgement:** assignees can explicitly acknowledge receipt of a task (separate from completion)

# Roles & access

| **Role** | **Level** | **What they can do (high level)** |
| --- | --- | --- |
| Admin | 4 | Configure system settings. Manage users and locations. Create and assign tasks to any HQ group, store lead, role, user, or location. View audit and completion across the org. |
| Headquarters | 3 | Create tasks for one or more stores and assign to Store Leads. View completion for HQ-created tasks. Escalate and reassign as needed. No system configuration changes. |
| Store Lead | 2 | Receive HQ tasks. Break them into subtasks. Assign to roles or individual educators. Create store-originated tasks. View completion for their store(s). |
| Educator | 1 | View tasks assigned to them or their role. Mark tasks complete and add completion notes. |

# Scope / placeholders

- **Task model, logic, and design**: to be defined (see sections below)

# Development Documentation

## 1. System Architecture Overview

**Purpose:** Define the high-level architecture of the task planning application

- **Frontend:** Web application (React/Vue/Angular) with responsive design
- **Backend:** RESTful API (Node.js/Python/Java) with authentication middleware
- **Database:** Relational database (PostgreSQL/MySQL) for structured task and user data
- **Authentication:** JWT-based authentication with role-based access control (RBAC)
- **Deployment:** Cloud-based infrastructure (AWS/Azure/GCP)

## 2. Data Models & Schema

### User Model

```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "role": "enum (Admin, Headquarters, Store Lead, Educator)",
  "access_level": "integer (1-4)",
  "location_id": "uuid (foreign key)",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### Location Model

```json
{
  "id": "uuid",
  "name": "string",
  "address": "string",
  "store_manager_id": "uuid (foreign key to User)",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### Task Model

```json
{
  "id": "uuid",
  "title": "string",
  "description": "text",
  "created_by": "uuid (foreign key to User)",
  "assigned_to_location": "uuid[] (foreign keys to Location)",
  "assigned_to_role": "enum[] (Headquarters, Store Lead, Educator)",
  "assigned_to_user": "uuid[] (foreign keys to User)",
  "parent_task_id": "uuid (nullable, for subtasks)",
  "due_date": "timestamp",
  "priority": "enum (Low, Medium, High)",
  "status": "enum (Not Started, In Progress, Completed)",
  "created_at": "timestamp",
  "updated_at": "timestamp",
  "completed_at": "timestamp (nullable)",
  "ack_required": "boolean (default true)",
  "delegatable": "boolean (default true)",
  "delegated_from_task_id": "uuid (nullable; points to the original task when delegated)"
}
```

### TaskAcknowledgement Model

```json
{
  "id": "uuid",
  "task_id": "uuid (foreign key to Task)",
  "user_id": "uuid (foreign key to User)",
  "acknowledged_at": "timestamp",
  "notes": "text (optional)"
}
```

### TaskCompletion Model

```json
{
  "id": "uuid",
  "task_id": "uuid (foreign key to Task)",
  "user_id": "uuid (foreign key to User)",
  "completed_at": "timestamp",
  "notes": "text (optional)"
}
```

## 3. API Endpoints Specification

### Authentication Endpoints

- `POST /api/auth/login` - User login (returns JWT token)
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### User Management Endpoints

- `GET /api/users` - List all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Location Management Endpoints

- `GET /api/locations` - List all locations
- `GET /api/locations/:id` - Get location by ID
- `POST /api/locations` - Create new location (Admin only)
- `PUT /api/locations/:id` - Update location (Admin only)
- `DELETE /api/locations/:id` - Delete location (Admin only)

### Task Management Endpoints

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

## 4. Access Control Rules

### Level 4 - Admin

- Full system access
- Create, read, update, delete users, locations, and configurations
- Create and assign tasks to any location, role, or user
- View all task completion statuses across the organization

### Level 3 - Headquarters

- Create and assign tasks to Store Leads (and optionally to locations)
- View tasks created by headquarters across all assigned stores
- View completion status for HQ-created tasks
- Cannot modify system configurations

### Level 2 - Store Lead

- Receive tasks from Headquarters
- Create subtasks and assign to their store team (roles or users)
- Create and assign tasks to their location(s)
- View tasks assigned to their location(s)
- View completion status for tasks at their location(s)
- Create and deactivate users for their location(s)
- Cannot modify system configurations

### Level 1 - Educator

- Read tasks assigned to them (directly, via role, or via location)
- Mark assigned tasks as complete
- View their own task history
- Cannot create or assign tasks

## 5. User Workflows

### Workflow 1: Admin Creates Task

1. Admin logs into the system
2. Navigates to "Create Task" page
3. Enters task details (title, description, due date, priority)
4. Selects assignment type: Location, Role, or specific Users
5. Optionally adds subtasks
6. Clicks "Create Task"
7. System validates input and creates task in database
8. Assignees receive notification (email/in-app)

### Workflow 2: Headquarters Assigns Task to Store Lead

1. Headquarters user logs into the system
2. Navigates to "Create Task" page
3. Enters task details
4. Selects one or more stores (or Store Leads) to assign
5. Assigns the task to the **Store Lead** for each selected store
6. Clicks "Create Task"
7. System creates the task and notifies the Store Lead(s)

### Workflow 3: Store Lead Receives and Delegates HQ Task

1. Store Lead logs into the system
2. Views incoming tasks from Headquarters
3. Opens the task and **acknowledges receipt**
4. Chooses one of:
    - **Complete it themself**, or
    - **Delegate** it to a role (e.g., Educator) or a specific user for completion
5. Optionally creates subtasks (for departments, shifts, or individuals)
6. Delegated assignees receive notification and can acknowledge receipt

### Workflow 4: Educator Completes Task

1. Educator logs into the system
2. Views "My Tasks" dashboard
3. Clicks on a task to view details
4. Reviews task requirements and any subtasks
5. Completes all subtasks if applicable
6. Clicks "Mark as Complete"
7. Optionally adds completion notes
8. System updates task status and records completion timestamp
9. Task creator/Store Lead receives notification

### Workflow 5: Manager Views Task Completion Status

1. Store Lead, Headquarters, or Admin logs in
2. Navigates to "Task Dashboard"
3. Filters tasks by location, date range, or status
4. Clicks on a task to view detailed completion report
5. Views list showing which assignees have completed vs. pending
6. Optionally sends reminder to users with pending tasks

## 7. Task Logic & Business Rules

### Task Assignment Rules

- A task can be assigned to multiple locations, roles, or users simultaneously
- **HQ → Store flow:** Headquarters assigns tasks to Store Leads (by store/location). Store Leads must acknowledge receipt, then either complete the task or delegate it to their teams.
- When assigned to a location, the **Store Lead** (for that location) is the accountable initial receiver for acknowledgement and triage.
- When assigned to a role, all users with that role receive the task
- Direct user assignment takes precedence over location/role assignment

### Subtask Rules

- Subtasks inherit the parent task's assignees unless explicitly reassigned
- Parent task cannot be marked complete until all subtasks are complete
- Subtasks can have different due dates from parent task
- Maximum nesting depth: 2 levels (task → subtask only, no sub-subtasks)

### Acknowledgement Logic

- Each assignee can explicitly acknowledge receipt of a task (separate from completion)
- Acknowledgement timestamp recorded per user
- Task shows acknowledgement progress (e.g., "7/10 acknowledged")

### Completion Logic

- Each assignee must individually complete their assigned task
- Task shows "Completed" status only when all assignees have completed
- Partial completion percentage displayed (e.g., "5/10 users completed")
- Completion timestamp recorded per user

### Notification Rules

- Send notification when task is assigned
- Send reminder 24 hours before due date if task incomplete
- Send notification to task creator when all assignees complete
- Send escalation notification to Store Lead if task overdue by 48 hours

## 8. Technical Implementation Guidelines

### Frontend Implementation

- Use component-based architecture (React recommended)
- Implement state management (Redux/Context API) for user session and task data
- Use responsive design framework (Tailwind CSS/Material-UI)
- Implement client-side routing (React Router)
- Add form validation library (Formik + Yup)

### Backend Implementation

- Use Express.js (Node.js) or FastAPI (Python) for API server
- Implement middleware for authentication (JWT verification)
- Add authorization middleware to check user access levels before route execution
- Use ORM (Sequelize/TypeORM for Node, SQLAlchemy for Python) for database operations
- Implement input validation and sanitization

### Database Implementation

- Use PostgreSQL for production (better JSON support and scalability)
- Create indexes on frequently queried fields (user_id, location_id, status, due_date)
- Implement foreign key constraints for data integrity
- Implement database transactions for multi-table operations

### Security Considerations

- Hash passwords using bcrypt (minimum 10 salt rounds)
- Implement CORS policies to restrict API access
- Use parameterized queries to prevent SQL injection
- Implement rate limiting on authentication endpoints
- Add HTTPS/TLS encryption for all communications
- Store JWT secret in environment variables, never in code

## 9. Testing Requirements

### Unit Tests

- Test all data model validation functions
- Test authentication and authorization middleware
- Test business logic functions (task assignment, completion calculation)
- Target: 80%+ code coverage

### Integration Tests

- Test API endpoints with different user roles
- Test database operations (CRUD operations for all models)
- Test authentication flow end-to-end

### End-to-End Tests

- Test complete user workflows (create task → assign → complete)
- Test access control across different user levels
- Test UI interactions using Selenium or Cypress

## 10. Deployment & DevOps

### Environment Setup

- Development: Local environment with Docker containers
- Staging: Cloud environment mirroring production
- Production: Cloud-based with load balancing and auto-scaling

### CI/CD Pipeline

- Automated testing on every commit (GitHub Actions/GitLab CI)
- Automated deployment to staging on merge to develop branch
- Manual approval required for production deployment
- Database migration scripts run automatically during deployment

### Monitoring & Logging

- Implement application logging (Winston/Pino for Node.js)
- Set up error tracking (Sentry)
- Monitor API performance and uptime (New Relic/DataDog)
- Set up alerts for critical errors and downtime

## 11. AI Agent Prompts

### Full Stack Engineer Prompt

`You are a full stack engineer building a task planning application. Implement the following:

1. Backend API using Express.js with JWT authentication
2. Database schema using PostgreSQL with the User, Location, Task, and TaskCompletion models
3. Role-based access control middleware that enforces Level 1/2/3/4 permissions
4. RESTful endpoints for task CRUD operations
5. Frontend React components for Dashboard, Task Creation Form, and Task Detail View
6. State management using Context API for user session and task data

Reference the data models and API specifications in sections 2 and 3 of this documentation. Ensure all security considerations from section 8 are implemented.`

### Product Architect Prompt

`You are a product architect designing the system architecture for a task planning application. Provide:

1. High-level system architecture diagram showing frontend, backend, database, and external services
2. Database schema with relationships and indexes
3. API design following RESTful principles
4. Authentication and authorization strategy using JWT and RBAC
5. Scalability considerations for handling multiple locations and thousands of users
6. Data flow diagrams for the main workflows (task creation, assignment, completion)

Reference the system architecture overview (section 1), data models (section 2), and business rules (section 7).`

### UX/UI Designer Prompt

`You are a UX/UI designer creating interfaces for a task planning application. Design:

1. Dashboard showing task overview with filters for status, location, and date
2. Task creation form with fields for title, description, due date, priority, and assignment options
3. Task detail view displaying task information, subtasks, and completion status by assignee
4. Login/authentication screen
5. Admin configuration panel for user and location management

Consider three user types: Admin (full access), Store Lead (creation access), and Educator (read-only). The design should be intuitive, mobile-responsive, and clearly indicate access levels. Reference the UI/UX component specifications (section 6) and user workflows (section 5).`

### QA Engineer Prompt

`You are a QA engineer responsible for validating a task planning application end-to-end. Create a test strategy and an initial test plan that covers:

1. Test approach: what to automate vs. what to test manually, and why
2. Test data & environments: local, staging, production safeguards, and seeded test accounts for each role (Admin, Headquarters, Store Lead, Educator)
3. RBAC coverage: permission matrix tests for Levels 1-4 across all endpoints and UI flows (create, view, update, delete, assign, complete, reassign)
4. API testing: contract tests for the endpoints in section 3, including negative cases (401, 403, 404, validation errors)
5. UI testing: critical path E2E tests for workflows in section 5, including mobile-responsive behavior
6. Task logic tests: assignment precedence rules, subtasks completion gating, completion percentages, and max nesting depth (section 7)
7. Notification tests: assignment notifications, reminders before due date, completion notifications, and overdue escalation timing (section 7)
8. Non-functional testing: performance (list tasks at scale), reliability, and basic security checks (rate limiting, auth token handling)
9. Release readiness: smoke tests, regression suite definition, and go/no-go checklist

Reference the data models in section 2, endpoints in section 3, workflows in section 5, and business rules in section 7. Use the testing requirements in section 9 as the baseline, and propose a realistic coverage target and CI gate criteria.`

## 12. Future Enhancements

- Mobile application (iOS/Android) using React Native
- Real-time notifications using WebSockets
- Task templates for recurring tasks
- Analytics dashboard showing completion rates and trends
- File attachments for tasks
- Comments/discussion threads on tasks
- Integration with calendar applications
- Bulk task operations (assign multiple tasks at once)

---

# 13. Project plan (phased delivery)

## Phase 0 — Foundations (week 0-1)

- Define success criteria and MVP scope (what must ship vs. can wait)
- Confirm user roles, permission model, and store/location source of truth
- Set up repos, environments (dev/stage/prod), CI/CD, and basic observability
- Establish API and DB conventions (versioning, migrations, error handling)

## Phase 1 — MVP: HQ → Store Lead task flow (week 2-4)

**Goal:** HQ can create tasks for locations, Store Leads can receive and work them.

- Auth + RBAC for Admin, HQ, Store Lead, Educator
- Core entities: Users, Locations, Tasks
- HQ creates task assigned to one or more locations (Store Lead is accountable receiver)
- Store Lead inbox: view assigned tasks and task details
- Store Lead actions:
    - Acknowledge receipt
    - Complete task (self-completion)
- Basic status reporting for HQ (per-store completion)
- Notifications (in-app minimum; email optional) for assignment

## Phase 2 — Delegation + per-assignee tracking (week 5-7)

**Goal:** Store Lead can delegate, and the system tracks acknowledgement and completion per assignee.

- Delegation endpoint and UI (Store Lead → role or specific user)
- Educator “My Tasks” view
- Assignee acknowledgement flow (timestamp + optional note)
- Completion flow per assignee (timestamp + optional note)
- Progress indicators:
    - Acknowledgement progress (x/y)
    - Completion progress (x/y)
- Audit-friendly event history (created, acknowledged, delegated, completed)

## Phase 3 — Subtasks + completion gating (week 8-10)

**Goal:** Tasks can include subtasks, and parent completion depends on subtasks.

- Subtask create/edit UX (max nesting depth: task → subtask)
- Rules:
    - Parent cannot be completed until all subtasks complete
    - Subtask assignee overrides supported
- Reporting updates to include subtask completion roll-up

## Phase 4 — Scale hardening + operations (week 11-13)

**Goal:** Make it production-ready for large store/user counts.

- Performance improvements (indexes, pagination, caching where needed)
- Reliability: retries, idempotency for acknowledge/complete/delegate
- Security review, rate limiting, logging hygiene, PII considerations
- Monitoring dashboards and alerting
- E2E test suite expanded for critical paths

## Phase 5 — Enhancements (post-launch)

- Real-time notifications (WebSockets)
- Templates for recurring tasks
- Analytics dashboard (trends, completion rates)
- Attachments and comments
- Bulk operations
- Calendar integrations
- Mobile app (React Native)

---

# 14. Success criteria

## Product outcomes

- Store Leads consistently acknowledge receipt of HQ tasks within 24 hours
- Store Leads can triage each HQ task by choosing **complete** or **delegate** within ___ hours/days
- Reduction in missed tasks due to “never saw it” by ***% (baseline:*** )
- Time saved vs. current process for HQ task creation and store follow-through:  ***minutes per task (baseline:*** )

## Adoption & usage

- Number of active stores using the tool weekly:  ***/***
- Weekly active Store Leads: ___%
- Weekly active Educators (for delegated tasks): ___%
- % of HQ tasks created in this system vs. other channels (Zipline/email/Teams): ___%

## Task execution quality

- Task completion rate by due date: ___%
- Overdue rate (tasks past due): ___%
- Delegation coverage: ___% of HQ tasks are either completed by Store Lead or delegated (no “stuck in inbox”)
- Visibility accuracy: acknowledgement and completion statuses match what happened in-store in spot checks (target: ___% accuracy)

## Reliability & performance

- Uptime/SLA target: ___%
- P95 response time for “My Tasks” and “Store Inbox” pages: ___ ms
- Support/incident rate: fewer than ___ Sev incidents per month

## Security & compliance

- RBAC works as intended (no cross-store data exposure in testing)
- Audit trail is sufficient for reviews (definition of “sufficient”: ___)
- Data retention requirements confirmed and met: ___

## Delivery (project)

- MVP live in *** pilot stores by <mention-date start="**--*_"/>
- Pilot success sign-off from stakeholders: ___
- Clear plan for rollout wave 1 and wave 2 (owners + dates): ___

---

# 15. Screen inventory (UX planning)

## Global / shared

- App shell / navigation (role-aware)
- Notifications center (in-app)
- Global search / filters (tasks)
- Error states (403, 404) and empty states

## Authentication

- Login
- Logged-out / session expired

## Headquarters (Level 3)

- HQ dashboard (tasks created by HQ, status by store)
- Create task (assign to location(s), due date, priority, description)
- Task detail (HQ view: acknowledgement + completion by store/assignee)
- Edit task (HQ-owned tasks)
- Reassign task to a different Store Lead (if supported)

## Store Lead (Level 2)

- Store Lead inbox (HQ-assigned tasks for the store)
- Task detail (Store Lead view)
    - Acknowledge receipt
    - Complete (self)
    - Delegate (to role or user)
    - Create/manage subtasks
- Delegation modal / flow (select role/user, optional note, due date overrides if allowed)
- Store tasks dashboard (all tasks for the store, filters, status)

## Educator (Level 1)

- My Tasks list (assigned directly or via role)
- Task detail (Educator view)
    - Acknowledge receipt
    - Mark complete + completion notes

## Admin (Level 4)

- Admin dashboard (system-level task visibility and health)
- User management (list, create, edit, deactivate)
- Location management (list, create, edit)
- Role/access management (if separate from users)

## Reporting (optional early / can phase)

- Completion report by task (x/y acknowledged, x/y completed)
- Completion report by store (trend over time)

## “Nice to have” / future

- Task templates
- Attachments UI
- Comments/discussion UI
- Bulk operations UI
- Real-time updates (live refresh indicators)