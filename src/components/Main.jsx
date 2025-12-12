import React, { useState } from "react";

export const Main = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(text);
      setTask("");
    }
  };

  return (
    <div>
      <div className="h-[40px] flex gap-[8px]">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add a new task..."
          className=" w-[280px] outline-solid px-[16px] outline-[#e4e4e7] rounded-[6px]"
        />

        <button
          className="w-[59px] border-none cursor-pointer text-[14px] text-[#f9f9f9] rounded-[6px] bg-[#3c82f6] "
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          onClick={() => {
            addTask(value);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
