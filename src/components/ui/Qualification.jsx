import React from "react";
import { SlCalender } from "react-icons/sl";

export default function Qualification() {
  return (
    <div id="qualifications" className="w-full py-16 mt-10 flex flex-col   gap-10 ">
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-2xl font-semibold tracking-wide text-white">
          Qualification
        </h1>
        <span className="text-center text-[12px] text-gray-300">
          My Educational Qualification 
        </span>
      </div>
      <div className="flex justify-center gap-8 text-white ">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col">
            <h1 className="text-[14px] font-semibold">B.Tech Information Technology</h1>
            <p className="text-[12px] text-gray-300">GLA University Mathura</p>
            <span className="text-[11px] text-gray-400 pt-1 flex items-center gap-2"> <SlCalender className="font-semibold mb-[2px]" /> 2022-2026</span>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[14px] font-semibold">Secondary School</h1>
            <p className="text-[12px] text-gray-300">Wisdom Public School,Aligarh</p>
            <span className="text-[11px] text-gray-400 flex items-center gap-2  pt-1"> <SlCalender className="font-semibold mb-[2px]" /> 2022-2026</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-7   ">
          <div className="bg-indigo-700 rounded-full  w-[15px] h-[15px]"></div>
          <div className="w-[3px] bg-indigo-700 flex-grow"></div>
          <div className="bg-indigo-700 rounded-full w-[15px] h-[15px]"></div>
          <div className="w-[3px] bg-indigo-700 flex-grow"></div>
          <div className="bg-indigo-700 rounded-full w-[15px] h-[15px]"></div>
        </div>

        <div className="flex flex-col justify-center">
            <h1 className="text-[14px] font-semibold">Senior Secondary School</h1>
            <p className="text-[12px] text-gray-300">Wisdom Public School,Aligarh</p>
            <span className="text-[11px] flex items-center gap-2 text-gray-400 pt-1"><SlCalender className="font-semibold   " /> 2022-2026</span>
          </div>
      </div>
    </div>
  );
}
