import React from "react";

export const Footer = ({ deleteAll, tasks }) => {
  const completedCount = tasks.filter((t) => t.completed).length;

  const handleClearCompleted = () => {
    const ok = confirm("Are you sure want to clear all the tasks?");
    if (ok) {
      deleteAll();
    }
  };

  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div onClick={handleClearCompleted} className="">
        {tasks.length > 0 && (
          <div>
            <div className="flex gap-15 border-t border-gray-300 mb-5 pt-5">
              <div className="text-gray-500">
                {completedCount} of {tasks.length} tasks completed
              </div>
              <button className="text-red-600 hover:cursor-pointer">
                Clear completed
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex ">
        Powered by <p className="text-[#3b73ed] ml-1"> Tergel</p>
      </div>
    </div>
  );
};
