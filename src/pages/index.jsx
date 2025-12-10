import { Main } from "@/components/Main";
import { All } from "@/components/All";
import { Task } from "@/components/Task";
import { Footer } from "@/components/Footer";

import React, { useState } from "react";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text: text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="bg-gray-100  w-screen flex justify-center">
        <div className="bg-white h-auto w-[377px] mt-[60px] rounded-[8px] py-[24px] px-[16px] flex items-center flex-col shadow-[0_0_12px_rgba(0,0,0,.16)] gap-[20px]">
          <h1 className="text-[20px] font-bold">To-Do List</h1>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[15px]">
              <Main addTask={addTask} />
              <All filter={filter} setFilter={setFilter} />

              <div className="relative left-17">
                <Task
                  tasks={tasks}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                  filter={filter}
                />
              </div>
            </div>
            <div className="relative mt-14 left-26">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
