# Book Notes App (MVP)

## Overview

Book Notes is a simple full-stack web application that allows users to:

- Add books (title, author, ISBN, rating, notes, date read)
- View all stored books
- Delete books
- Automatically display book covers using ISBN (OpenLibrary Covers API)

The application uses Express.js for backend routing, EJS for server-side rendering, and PostgreSQL for persistent data storage.

This is an MVP version and will be expanded with additional features.

---

## Tech Stack

**Backend**
- Node.js
- Express.js
- pg (PostgreSQL client)

**Database**
- PostgreSQL

**Frontend**
- EJS
- CSS
- OpenLibrary Covers API (ISBN-based cover images)

---

## Setup & Installation

### Install Dependencies

Inside the project directory:


This installs all required packages from `package.json`.

---

### PostgreSQL Setup

Ensure PostgreSQL is running.

Create the database (if not already created):

