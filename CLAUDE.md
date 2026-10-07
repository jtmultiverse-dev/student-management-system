# Student Management System — Claude Code Instructions

## Project stack

Frontend:
- React
- Vite
- Ant Design
- React Hook Form
- Zod
- Redux Toolkit / RTK Query

Backend:
- Node.js
- Express
- Prisma
- PostgreSQL

## Core rules

- Preserve the existing project architecture.
- Do not rewrite working code unless the task requires it.
- Do not modify unrelated files.
- Prefer the smallest safe change that solves the task.
- Reuse existing components, services, schemas, and patterns.
- Do not introduce a new library without explicit approval.
- Do not remove a dependency without explicit approval.

## Before implementation

For any non-trivial task:

1. Inspect the relevant existing code.
2. Trace the current data flow.
3. Explain what files need to change.
4. Present a short implementation plan.
5. Wait for approval before large architectural changes.

## Frontend

- Use Ant Design for UI.
- Use React Hook Form for forms.
- Use Zod for client-side validation.
- Use RTK Query for backend communication.
- Do not create duplicate API clients or fetch logic.
- Keep components reusable and reasonably small.
- Preserve responsive behavior.
- Show validation and server errors in a user-friendly way.

## Backend

- Follow the existing route → validation → controller → service → Prisma flow.
- Use Zod for request validation.
- Return appropriate HTTP status codes.
- Keep error handling consistent.
- Never expose raw internal errors to the frontend.

## Database safety

- Never reset the database.
- Never delete production data.
- Never run destructive Prisma commands.
- Never create or apply migrations without explicit approval.
- Never change the Prisma schema unless the task explicitly requires it.

## Git safety

- Never revert user changes unless explicitly asked.
- Never use destructive Git commands.
- Do not commit or push unless explicitly asked.
- Always review the diff after implementation.

## Verification

After implementation, when applicable:

- Run lint or type checks.
- Run relevant tests.
- Run the frontend build.
- Check backend startup.
- Report any errors.
- Summarize changed files and behavior.

## Scope discipline

- Fix only issues related to the current task.
- If another issue is discovered, report it instead of silently fixing it.
- Do not refactor unrelated code while implementing a feature.

## Learning mode

When explaining code:
- Explain why the approach is used.
- Point out important React, API, database, or architecture concepts.
- Keep explanations practical and tied to this project.