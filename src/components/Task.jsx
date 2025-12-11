import React from "react";

export const Task = ({ tasks, toggleComplete, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="relative top-5">
        <p className="text-[#6b7280]">No tasks yet. Add one above</p>
      </div>
    );
  }

  return (
    <div className="relative top-5 flex flex-col gap-2 right-17">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center duration-300 bg-gray-50 hover:cursor-pointer hover:bg-gray-100 px-3 py-4 rounded"
        >
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="size-5 hover:cursor-pointer"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              //   onClick={() => toggleComplete(task.id)}
            />
            <span
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
          </div>
          <button
            className="text-red-500 bg-red-50 py-1 px-2 text-[16px] rounded-[6px] hover:cursor-pointer"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
