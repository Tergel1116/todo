import React from "react";

export const Footer = ({ deleteAll, tasks }) => {
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className="flex">
        Powered by <p className="text-[#3b73ed]">Tergel</p>
      </div>
    </div>
  );
};

// import React from "react";

// export const Footer = ({ deleteAll, tasks }) => {
//   const completedCount = tasks.filter((t) => t.completed).length;

//   return (
//     <div className="flex flex-col items-center gap-[10px] w-full">
//       {/* Completed count + Clear button ONLY if there are tasks */}
//       {tasks.length > 0 && (
//         <div className="flex justify-between w-full text-sm text-gray-600 px-2">
//           <p>
//             {completedCount} of {tasks.length} tasks completed
//           </p>

//           <button className="text-red-500 cursor-pointer" onClick={deleteAll}>
//             Clear Completed
//           </button>
//         </div>
//       )}

//       {/* Powered by Tergel — ALWAYS visible */}
//       <div className="flex gap-1">
//         <span>Powered by</span>
//         <p className="text-[#3b73ed]">Tergel</p>
//       </div>
//     </div>
//   );
// };

// import React from "react";

// export const Footer = ({ deleteAll, tasks }) => {
//   const completedCount = tasks.filter((t) => t.completed).length;

//   // Confirm-тэй deleteAll
//   const handleClearCompleted = () => {
//     if (completedCount === 0) return; // Хэрвээ completed task байхгүй бол юу ч хийхгүй
//     const ok = confirm("Are you sure you want to clear all completed tasks?");
//     if (ok) {
//       deleteAll();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-[10px] w-full">
//       {/* Completed count + Clear button ONLY if there are tasks */}
//       {tasks.length > 0 && (
//         <div className="flex justify-between w-full text-sm text-gray-600 px-2">
//           <p>
//             {completedCount} of {tasks.length} tasks completed
//           </p>

//           <button
//             className="text-red-500 cursor-pointer"
//             onClick={handleClearCompleted}
//           >
//             Clear Completed
//           </button>
//         </div>
//       )}

//       {/* Powered by Tergel — ALWAYS visible */}
//       <div className="flex gap-1">
//         <span>Powered by</span>
//         <p className="text-[#3b73ed]">Tergel</p>
//       </div>
//     </div>
//   );
// };
