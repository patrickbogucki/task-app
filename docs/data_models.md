# Data Models & Schema

## User Model

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

## Location Model

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

## Task Model

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

## TaskAcknowledgement Model

```json
{
  "id": "uuid",
  "task_id": "uuid (foreign key to Task)",
  "user_id": "uuid (foreign key to User)",
  "acknowledged_at": "timestamp",
  "notes": "text (optional)"
}
```

## TaskCompletion Model

```json
{
  "id": "uuid",
  "task_id": "uuid (foreign key to Task)",
  "user_id": "uuid (foreign key to User)",
  "completed_at": "timestamp",
  "notes": "text (optional)"
}
```
