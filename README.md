# Advanced Todo List App

This is a comprehensive Todo List application built with React, featuring task management, editing, completion tracking, sorting, and local storage persistence.

## Features

* **Add Tasks:** Users can add new tasks to their list.
* **Edit Tasks:** Users can edit existing tasks.
* **Delete Tasks:** Users can delete tasks from the list.
* **Complete Tasks:** Users can mark tasks as completed, moving them to a separate "Completed Tasks" section.
* **Delete Completed Tasks:** Users can delete completed tasks.
* **Sort Tasks:** Users can sort tasks in ascending or descending order.
* **Local Storage:** Tasks and completed tasks are persisted using local storage, so they are retained across browser sessions.
* **Error Handling:** Displays an error message if the user tries to add an empty task.
* **Visual Cues:** Uses icons for delete, edit, complete, and sort actions.
* **Responsive UI:** Styled using Tailwind CSS for a modern and responsive design.

## Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone [https://github.com/ibnex/Todo-List.git]
    cd [Todo-List]
    ```

2.  **Install dependencies:**

    ```bash
    npm install vite , tailwind , react-icons

    ```

    (Make sure you have Node.js and npm installed.)

## Usage

1.  **Run the application:**

    ```bash
    npm run dev
    ```



3.  **Manage your tasks:**

    * Enter a task in the input field and click "add" to add it to the list.
    * Click the edit icon to edit a task.
    * Click the delete icon to remove a task.
    * Click the checkbox to mark a task as completed.
    * Click the arrow icon to sort the tasks.
    * Completed tasks are displayed in a separate section.
    * Click the delete icon in the completed section to remove a completed task.

## Technologies Used

* React
* Tailwind CSS
* JavaScript
* React Icons (`react-icons`)
* Local Storage (browser API)

## Code Explanation

* **`useState`:** Manages the input value, todo list, error messages, sort direction, and completed tasks list.
* **`useEffect`:** Loads and saves tasks to local storage.
* **`addTask`:** Adds a new task to the todo list.
* **`DeleteTask`:** Removes a task from the todo list.
* **`EditTask`:** Moves a task to the input field for editing.
* **`complete`:** Moves a task from the todo list to the completed tasks list.
* **`DeleteCompletedTask`:** Removes a task from the completed tasks list.
* **`reverse`:** Reverses the order of the todo list.
* **Local Storage:** Uses `localStorage.getItem` and `localStorage.setItem` to persist data.
* **React Icons:** Uses `react-icons` for icons.
* **Tailwind CSS:** Used for styling the application.

## Author

* [Github] - [https://github.com/ibnex],
* [Instagram] - [https://www.instagram.com/ibne__ahad?igsh=MWgzbGs3bDY1M296Yg==]


## License

This project is open source .

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.


                <---->
