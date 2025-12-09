import React, { useState } from "react";

export const All = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="flex gap-[10px] mr-[150px]">
      <button
        onClick={() => setFilter("all")}
        className={`bg-blue-500 px-[12px] py-[6px] cursor-pointer text-[12px] text-black rounded-[6px] ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`bg-[#e5e7eb] px-[12px] py-[6px] cursor-pointer text-[12px]  text-black rounded-[6px] ${
          filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`bg-[#e5e7eb] px-[12px] py-[6px] cursor-pointer text-[12px] text-black rounded-[6px] ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>
    </div>
  );
};
