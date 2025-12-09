import { Main } from "@/components/Main";
import { All } from "@/components/All";
// import { Task } from "@/components/Task";
import { Footer } from "@/components/Footer";

import React from "react";
export const Home = () => {
  // const [tasks, settask] = useState([]);

  // const addTask = (text) => {
  //   settask([...tasks, { id: Date.now(), text: text, completed: false }]);
  // };

  return (
    <div>
      <div className="bg-gray-100 h-screen w-screen flex justify-center">
        <div className="bg-white h-[330px] w-[377px] mt-[60px] rounded-[8px] py-[24px] px-[16px] flex items-center flex-col shadow-[0_0_12px_rgba(0,0,0,.16)] gap-[20px]">
          <h1 className="text-[20px] font-bold">To-Do List</h1>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[15px]">
              <Main />
              <All />
              <div className="relative left-17">
                {/* <Task /> */}
                {/* tasks={tasks} */}
              </div>
            </div>
            <div className="relative top-20 left-26">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
