# Project Overview
This project is a ticket management system that consists of a backend API and a frontend application built with React. The backend API is responsible for managing ticket information, while the frontend application provides a user interface for interacting with the ticket data.

## Backend API
The backend API is built with Node.js and Express. It uses the apicache middleware for caching responses and improves performance. The API supports the following operations:

-GET /: Fetch all tickets. This route is cached for 2 minutes to improve performance.
-GET /:id: Fetch a specific ticket by its ID.
-POST /: Create a new ticket.
-PATCH /:id: Update a specific ticket by its ID.
-DELETE /:id: Delete a specific ticket by its ID.


## Frontend Application
The frontend application is built with React. It provides a user interface for managing ticket information. Users can view all tickets, view details of a specific ticket, create new tickets, update existing tickets, and delete tickets.

## Getting Started
To get started with this project, clone the repository and install the dependencies.

For the backend API:
```
cd api
npm install
```

For the frontend application:
```
cd app
npm install
```

## Running the Project
To run the backend API:
```
cd api
npm run dev
```

To run the frontend application:
```
cd app
npm start
```

The backend API will run on http://localhost:3001 and the frontend application will run on http://localhost:3000.
