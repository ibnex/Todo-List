import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

function TodoList() {
  const [input, setinput] = useState("");
  const [todo, setTodo] = useState([]);
  const [err, setErr] = useState("");
  const [arrow, setArow] = useState(true);
  const [Compelted, setCompelted] = useState([]);

  const addTask = () => {
    const val = input.trim();
    if (!val) {
      setErr("Task is empty");
    } else {
      setTodo((prev) => [...prev, { id: Date.now(), title: input }]);
      setinput("");
      setErr("");
    }
  };
  useEffect(() => {
    const Tasks = JSON.parse(localStorage.getItem("taskArr"));
    if (Tasks == null) {
    } else if (Tasks.length > 0) {
      setTodo(Tasks);
    } else {
    }
    const Taskscomp = JSON.parse(localStorage.getItem("completedArr"));
    if (Tasks == null) {
    } else if (Taskscomp.length > 0) {
      setCompelted(Taskscomp);
    } else {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskArr", JSON.stringify(todo));
    localStorage.setItem("completedArr", JSON.stringify(Compelted));
  }, [todo, Compelted]);

  const DeleteTask = (id) => {
    const updataArr = todo.filter((item) => item.id !== id);
    setTodo(updataArr);
  };

  const EditTask = (id) => {
    const finded = todo.find((item) => {
      return item.id == id;
    });

    setinput(finded.title);
    const updataArr = todo.filter((item) => item.id !== id);

    setTodo(updataArr);
  };

  const complete = (id) => {
    const finded = todo.find((item) => {
      return item.id == id;
    });
    setCompelted((prev) => [...prev, finded]);
    const updataArr = todo.filter((item) => item.id !== id);
    setTodo(updataArr);
  };

  const DeleteCompletedTask = (id) => {
    const compeltedd = Compelted.filter((items) => {
      return items.id !== id;
    });
    setCompelted(compeltedd);
  };

  const reverse = () => {
    setArow(!arrow);
    setTodo(todo.reverse());
  };

  return (
    <>
      <div className="bg-slate-400 w-screen min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-2xl px-5 py-3 w-md min-h-[40vh]">
          <div>
            <h1 className="text-4xl font-bold text-center ">Todo list</h1>
          </div>

          <div className="flex justify-center items-center py-3 w-full  ">
            <input
              className="w-[90%] px-3 py-2 rounded-l-2xl rounded-t-2xl border-b-1 border-l-1  focus:outline-none"
              type="text"
              placeholder="Task. . . . . "
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <button
              className="px-3 py-2 rounded-r-2xl bg-orange-500  border-b-1  border-r-1"
              onClick={addTask}
            >
              add
            </button>
          </div>
          <h1 className="text-sm text-red-500 px-2 relative bottom-3">{err}</h1>

          <div className="px-3 py-2 ">
            {todo.length <= 0 && Compelted.length <= 0 ? (
              <div className="flex items-center justify-center">
                <h1 className="text-4xl mt-5 text-gray-400">No Task added !</h1>
              </div>
            ) : (
              <div className={`${todo.length <= 0 <= 0 ? "border-b-2" : null}`}>
                <div></div>
                {todo.map((task) => (
                  <div
                    key={task.id}
                    className={` flex justify-between items-center px-3 py-2 overflow-y-auto bg-gray-400   my-2 rounded-lg`}
                  >
                    <div className="flex items-center gap-3 py-1">
                      <input
                        type="checkbox"
                        onChange={() => complete(task.id)}
                        className="mt-1"
                      />
                      <h1 className="text-2xl">{task.title}</h1>
                    </div>

                    <div className="space-x-3 flex ">
                      <button
                        className="text-2xl hover:text-orange-500"
                        onClick={() => DeleteTask(task.id)}
                      >
                        <AiOutlineDelete />
                      </button>

                      <button
                        className="text-2xl hover:text-orange-500"
                        onClick={() => EditTask(task.id)}
                      >
                        <MdOutlineEdit />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {todo.length <= 1 ? null : (
            <div className="px-2 mt-1 flex items-center">
              <button
                className="p-2 rounded-full bg-slate-500"
                onClick={reverse}
              >
                {arrow ? <FaArrowDownLong /> : <FaArrowUp />}
              </button>
            </div>
          )}
          {Compelted.length <= 0 ? null : (
            <div className="my-2 px-3 space-y-3">
              <h1 className="text-center text-2xl">Completed Tasks</h1>
              {Compelted.map((item) => (
                <div
                  key={item.id}
                  className="flex px-5 justify-between py-2 overflow-y-auto bg-green-400  rounded-lg"
                >
                  <div className="flex  items-center gap-3">
                    <h1 className="text-xl">
                      <IoCheckmarkDone />
                    </h1>{" "}
                    <h1 className="text-xl line-through">{item.title}</h1>{" "}
                  </div>

                  <button
                    className="text-2xl hover:text-orange-500"
                    onClick={() => DeleteCompletedTask(item.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TodoList;
