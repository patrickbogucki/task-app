# Project Plan (Phased Delivery)

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
