import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full flex  flex-col gap-8 py-10  px-20">
        <div className="flex flex-col gap-1 ">
        <h1 className="text-center text-white text-2xl font-semibold">
          About me
        </h1>
        <p className="text-center text-gray-300 text-[12px]">My introduction </p>
      </div>

      <div className="flex flex-row justify-between    gap-12">
        <img src="../src/assets/image.jpg" className="w-[320px] rounded-md " />
        <div className="flex flex-col items-start gap-3 ">
          <p className="text-gray-300 text-[15px]">
            Hey there, I am Mradul a 21-year-old student who is currently
            pursuing Btech in CSE. I am passionate about Software Development and Product management
          </p>
          <button className="py-2 text-white px-2 bg-indigo-700 rounded-md  hover:bg-indigo-800 transition-all">Resume</button>
        </div>
      </div>
      
    </div>
  );
}
