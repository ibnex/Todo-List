import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { FaArrowDownLong, FaArrowUp } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("taskArr")) || [];
    setTodo(tasks);
    const completedTasks = JSON.parse(localStorage.getItem("completedArr")) || [];
    setCompleted(completedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskArr", JSON.stringify(todo));
    localStorage.setItem("completedArr", JSON.stringify(completed));
  }, [todo, completed]);

  const addTask = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Task is empty");
      return;
    }
    setTodo((prev) => [...prev, { id: Date.now(), title: trimmedInput }]);
    setInput("");
    setError("");
  };

  const deleteTask = (id) => {
    setTodo((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = todo.find((task) => task.id === id);
    if (taskToEdit) {
      setInput(taskToEdit.title);
      setTodo((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const completeTask = (id) => {
    const taskToComplete = todo.find((task) => task.id === id);
    if (taskToComplete) {
      setCompleted((prev) => [...prev, taskToComplete]);
      setTodo((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const deleteCompletedTask = (id) => {
    setCompleted((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleSort = () => {
    setSortAscending((prev) => !prev);
    setTodo((prev) => [...prev].reverse());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Todo List
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-r-lg"
          >
            Add
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {todo.length === 0 && completed.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">No tasks added yet!</p>
        ) : (
          <div className="space-y-2">
            {todo.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => completeTask(task.id)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="text-lg">{task.title}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(task.id)}
                    className="text-lg text-indigo-600 hover:text-indigo-800"
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-lg text-red-600 hover:text-red-800"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {todo.length > 1 && (
          <button
            onClick={toggleSort}
            className="mt-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            {sortAscending ? <FaArrowDownLong /> : <FaArrowUp />}
          </button>
        )}

        {completed.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
              Completed Tasks
            </h2>
            <div className="space-y-2">
              {completed.map((task) => (
                <div
                  key={task.id}
                  className="flex justify-between items-center p-3 bg-green-100 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <IoCheckmarkDone className="text-xl text-green-600" />
                    <span className="text-lg line-through">{task.title}</span>
                  </div>
                  <button
                    onClick={() => deleteCompletedTask(task.id)}
                    className="text-lg text-red-600 hover:text-red-800"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;