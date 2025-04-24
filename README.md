# Fullstack Blog Project

A fullstack blog application built with React (frontend) and Node.js (backend), using PostgreSQL as the database.

## Project Structure

```plaintext
fullstack-blog/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── posts/
│   │   │       ├── PostCard.jsx
│   │   │       └── PostList.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
└── backend/           # Node.js backend application
    ├── crudOperations.js
    ├── index.js
    ├── package-lock.json
    └── package.json

```

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173)

## Backend Setup

(to be implemented by team members)

## Features

### Frontend Features

- Homepage with list of blog posts
- Post details page
- Create post form
- Update post functionality
- Delete post functionality

### Backend Features

- RESTful API endpoints
- PostgreSQL database integration
- CRUD operations for blog posts

## Team Members

- Person A: Backend Core Setup & Routing
- Person B: Backend CRUD & Data Handling
- Person C: App Structure & Navigation (Current)
- Person D: Forms & Post Management

## Tech Stack

### Frontend Technologies

- React
- React Router
- Axios
- Tailwind CSS

### Backend Technologies

- Node.js
- PostgreSQL
- Neon database

## Development Guidelines

1. Use Pull Requests for all updates to the main branch
1. Follow the established code style
1. Write clear commit messages
1. Test your changes before submitting PRs
1. Keep the code simple and well-commented
