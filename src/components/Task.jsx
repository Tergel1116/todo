// import React from "react";

// export const Task = ({ tasks }) => {
//   if (tasks.length === 0) {
//     return (
//       <div className="relative top-5">
//         <p className="text-[#6b7280]">No tasks yet. Add one above</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative top-5 flex flex-col gap-2">
//       {tasks.map((task) => (
//         <div
//           // key={task.id}
//           className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
//         >
//           {/* <span
//             className={`cursor-pointer ${
//               task.completed ? "line-through text-gray-400" : ""
//             }`}
//             onClick={() => toggleComplete(task.id)}
//           >
//             {task.text}
//           </span> */}
//           <button
//             className="text-red-500 font-bold"
//             // onClick={() => deleteTask(task.id)}
//           >
//             X
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };
