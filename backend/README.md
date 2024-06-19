# Form Submissions Backend

This is a simple backend server for handling form submissions, built with Express and TypeScript.

## Endpoints

- **GET /ping**: A ping endpoint to check if the server is running. Always returns `{ success: true }`.
- **POST /submit**: Endpoint to submit a new form.
    - Parameters: `name`, `email`, `phone`, `github_link`, `stopwatch_time`.
- **GET /read**: Endpoint to read a form submission by index.
    - Query Parameter: `index` (0-indexed).

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/bhavyasree627/Bogitha-Bhavya-sree-Slidely-task2--Backend.git
    cd backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the server:**
    ```bash
    npm start
    ```

The server will run on `http://localhost:3000`.

## Usage

- **Submit a new form:**
    ```bash
    curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","github_link":"http://github.com/johndoe","stopwatch_time":"00:10:30"}'
    ```

- **Read a form submission:**
    ```bash
    curl http://localhost:3000/read?index=0
    ```
