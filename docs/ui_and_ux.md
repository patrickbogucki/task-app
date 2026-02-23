# UI & UX Planning (Screen Inventory)

## Design System Guidelines
This project uses `shadcn/ui` structured components alongside a custom Tailwind CSS color palette and the Next.js `Geist` default fonts for a modern, high-contrast, enterprise aesthetic.

### Typography
- **Primary Font:** Geist Sans
- **Monospace Font:** Geist Mono

### Color Palette (Tailwind Variables & Full Reference)
The application utilizes a custom "Brand Bold" palette derived from the following core brand colors:

**Primary Brand Colors:**
- **Red:** `#FF4646` (`var(--color-brand-red)`) - Primary actions, buttons, alerts.
- **Black:** `#140F0F` (`var(--color-brand-dark)`) - Primary text, high-contrast surfaces.
- **Off-White:** `#FDFDF8` (`var(--color-neutral-warm)`) - Cards, surfaces, table rows.
- **Light Neutral:** `#EFEEEC` (`var(--color-neutral-light)`) - Global application background.
- **Medium Neutral:** `#C8C2B8` (`var(--color-neutral-medium)`) - Borders, dividers.
- **Dark Neutral:** `#7F746C` (`var(--color-neutral-dark)`) - Secondary text, metadata.
- **Dark Brown:** `#2B1F1E` (`var(--color-brand-brown)`) - Secondary dark accents.

**Secondary Brand Colors (Available for future use/semantic states):**
- **Dark Green:** `#142A0E` (Success Text)
- **Light Blue:** `#C0DDFF` (Info Background)
- **Light Green/Yellow:** `#F3FED7` (Success Background)
- **Yellow:** `#F4FF8E` (Warning Background)
- **Dark Gray/Brown:** `#524A43` (Warning Text)

### Status Colors (Semantic)
Status indicators (New, In Progress, Completed, Overdue) use standard pale background variants with bold foregrounds from the secondary palette. Reference `globals.css` base layers for future additions.

---

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
