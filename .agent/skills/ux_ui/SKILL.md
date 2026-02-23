---
name: UX & UI Guidelines
description: Design system guidelines, layout patterns, and UI/UX conventions for the Task App. Reference this skill when working on frontend design, UI changes, or mocking up screens.
---

# UI & UX Agent Skill Guidelines

When executing tasks related to the frontend, user interface (UI), or user experience (UX) for this Task App, **always prioritize these established standards**.

## 1. Core Design Philosophy
- **Component Library:** Use `shadcn/ui` structured components as the foundation for the application.
- **Styling:** Use Tailwind CSS with the custom `var(--color-*)` variables defined in the brand guidelines. 
- **Aesthetic:** Modern, high-contrast, enterprise-grade feel.

## 2. Typography
- **Primary Font:** `Geist Sans`
- **Monospace Font:** `Geist Mono`

## 3. "Brand Bold" Color Palette
Always use the CSS variables mapped below in Tailwind utility classes (e.g., `bg-brand-red`, `text-brand-dark`).

### Primary Colors
- **Red (Primary Actions, Alerts):** `var(--color-brand-red)` - `#FF4646`
- **Black (Primary Text, High-Contrast Surfaces):** `var(--color-brand-dark)` - `#140F0F`
- **Off-White (Cards, Surfaces, Tables):** `var(--color-neutral-warm)` - `#FDFDF8`
- **Light Neutral (Global App Background):** `var(--color-neutral-light)` - `#EFEEEC`
- **Medium Neutral (Borders, Dividers):** `var(--color-neutral-medium)` - `#C8C2B8`
- **Dark Neutral (Secondary Text, Metadata):** `var(--color-neutral-dark)` - `#7F746C`
- **Dark Brown (Secondary Accents):** `var(--color-brand-brown)` - `#2B1F1E`

### Secondary/Semantic Contexts
- **Success:** Dark Green (`#142A0E`) text with Light Green/Yellow (`#F3FED7`) background.
- **Info:** Light Blue (`#C0DDFF`) background.
- **Warning:** Dark Gray/Brown (`#524A43`) text with Yellow (`#F4FF8E`) background.
- **Status Indicators (New, In Progress, Completed, Overdue):** Use standard pale background variants with bold foregrounds.

## 4. Layout & Application Structure
- **Global Constraints:** Role-aware app shell, global task search, notifications center, and standardized error/empty states.
- **Mobile Responsiveness:** Ensure tables, lists, and forms degrade gracefully to 1-column layouts on mobile viewports.
- **Typography Hierarchy:** 
  - Restrict `h1` tags to a single instance per page.
  - Rely on semantic HTML elements for structural sections (e.g., `main`, `section`, `nav`).

## 5. Screen Inventory Overview
When defining components, consider the specific user context and access level:
- **Admin (Level 4):** System-level dashboard, health tasks, and configuration panels.
- **Headquarters (Level 3):** Global HQ-originated task views, multi-store task creation and reporting.
- **Store Lead (Level 2):** Delegating tasks, acknowledge receipts, and managing individual store pipelines.
- **Educator (Level 1):** Read-only subtask lists with specific acknowledgment and completion functions.

## 6. General Guidelines for Agent Action
- Create responsive UI designs.
- Add unique/descriptive and semantic classes/ids to complex layout structures.
- Use smooth transitions (`transition-all`, `duration-200`) for hover states on buttons and links to make them feel responsive.
- Do not mix raw hex colors (`#FF4646`) if the CSS custom variable counterpart (`border-brand-red`, `text-brand-red`) is available via Tailwind.
