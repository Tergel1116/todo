import { Main } from "@/components/Main";
import { All } from "@/components/All";
import { Task } from "@/components/Task";
import { Footer } from "@/components/Footer";

import React from "react";
export const Home = () => {
  //   const [list, setValue] = useState();
  return (
    <div>
      <div className="bg-gray-100 h-screen w-screen flex justify-center">
        <div className="bg-white h-[378px] w-[377px] mt-[60px] rounded-[8px] py-[24px] px-[16px] flex items-center flex-col shadow-[0_0_12px_rgba(0,0,0,.16)] gap-[20px]">
          <h1 className="text-[20px] font-bold">To-Do List</h1>
          <Main />
          <All />
          <Task />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;
