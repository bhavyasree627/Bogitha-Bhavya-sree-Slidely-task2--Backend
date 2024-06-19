# FormCreateSubmission

This project consists of a front-end form application built with Visual Basic and a back-end server created using Express and TypeScript. The front-end allows users to create submissions, which are then saved to a JSON file via the backend. Users can also view previously submitted entries.

## Features

- **Form Submission:** Users can enter their details (name, email, phone number, GitHub link) and manage a stopwatch timer. The data is submitted and saved to a backend server.
- **View Submissions:** Users can navigate through previously submitted entries using next and previous buttons.
- **Backend Integration:** The front-end communicates with a backend server to save and retrieve submissions.

## Installation

### Frontend

1. Open the Solution:

    Navigate to the project directory (`FormCreateSubmission`) and open the solution file (`FormCreateSubmission.sln`) in Visual Studio.

2. Build and Run:

    - Build the solution (Ctrl+Shift+B).
    - Start the application by running the project (F5).

### Backend

1. Clone the Backend Repository:

    ```bash
    git clone https://github.com/bhavyasree627/Bogitha-Bhavya-sree-Slidely-task2--Backend.git
    cd backend
    ```

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Run the Backend Server:

    ```bash
    npm start
    ```

## Usage

### Creating a Submission

1. Fill out the Form:

    Enter your details in the provided fields (name, email, phone number, GitHub link).

2. Manage Stopwatch:

    Use the "Toggle Stopwatch" button (or CTRL+T) to start or stop the stopwatch timer.

3. Submit Your Data:

    Click the "Submit" button (or CTRL+S) to save your submission to `submissions.json` through the backend server.

### Viewing Submissions

1. Navigate Through Entries:

    Use the "Next" (CTRL+N) and "Previous" (CTRL+P) buttons to browse through existing submissions.

2. Review Submitted Data:

    Each submission's details are displayed dynamically within the application.

### Backend Integration

- The front-end form interacts with the backend API to save and retrieve data. The form submission triggers a POST request to the backend, saving the data to a JSON file. The navigation through submissions triggers GET requests to fetch specific entries.

- **Frontend GitHub Repository:** [Frontend Repository](https://github.com/bhavyasree627/Bogitha-Bhavya-sree-Slidely-task2---Slidely-Forms-App/tree/master)

## Screenshots

Include screenshots or GIFs showing the application interface and its functionalities.


- **Create Submission:**

  ![Screenshot 2024-06-19 230113](https://github.com/bhavyasree627/Bogitha-Bhavya-sree-Slidely-task2--Backend/assets/99475745/af83f1cc-490f-4334-804c-03a6c064752b)

- **View Submission:**
  
![Screenshot 2024-06-19 230554](https://github.com/bhavyasree627/Bogitha-Bhavya-sree-Slidely-task2--Backend/assets/99475745/1ecc46e1-08fb-4c5a-8816-77034c255e90)

