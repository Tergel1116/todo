import React from "react";

export const All = () => {
  return (
    <div className="flex gap-[10px] mr-[150px]">
      <button className="bg-[#3c82f6] px-[12px] py-[6px] cursor-pointer text-[12px] text-white rounded-[6px]">
        All
      </button>
      <button className="bg-[#e5e7eb] px-[12px] py-[6px] cursor-pointer text-[12px] text-[#363636] rounded-[6px]">
        Active
      </button>
      <button className="bg-[#e5e7eb] px-[12px] py-[6px] cursor-pointer text-[12px] text-[#363636] rounded-[6px]">
        Completed
      </button>
    </div>
  );
};
