# UI & UX Planning (Screen Inventory)

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
