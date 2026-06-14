# Minimalist School Portal

A functional, responsive school portal built with Vue 3, Tailwind CSS, and PocketBase.

## Setup Instructions

### 1. Backend (PocketBase)

1.  **Download PocketBase**: Visit the [PocketBase Releases](https://github.com/pocketbase/pocketbase/releases) and download the appropriate binary for your OS.
2.  **Place the Binary**: Move the `pocketbase` executable to the root directory of this project.
3.  **Start the Server**:
    ```bash
    ./pocketbase serve
    ```
    The server will initialize the schema and seed initial accounts automatically via the `pb_hooks/init.js` script.

### 2. Frontend (Vue 3)

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    The portal will be available at `http://localhost:5173`.

## Initial Accounts

All accounts use the password: `password123`

-   **Student**: `student@school.edu`
-   **Teacher**: `teacher@school.edu`
-   **Administrator**: `admin@school.edu`

## Features

-   **Role-based Dashboards**: Separate layouts and subpages for Students, Teachers, and Admins.
-   **Full Responsiveness**: Mobile-first design with collapsible navigation sidebars.
-   **PocketBase Integration**: Authentication and data fetching handled via PocketBase.
-   **Modern Stack**: Built with Vue 3 (Composition API), Vite, Tailwind CSS v4, and Lucide Icons.
