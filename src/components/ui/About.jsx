import React from "react";
import VanillaTilt from "vanilla-tilt";
import { useRef } from "react";
import { useEffect } from "react";
import { TiDocumentText } from "react-icons/ti";
export default function About() {
    const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      reverse: false,
      max: 13,
      speed: 200,
      glare: false,
      "max-glare": 0.5,
    });

    // Clean up function to destroy VanillaTilt on unmount
    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, []);
  return (
    <div id="about" className="w-full flex  flex-col gap-8   sm:px-32">
        <div className="flex flex-col gap-1 ">
        <h1 className="text-center text-gray-800 dark:text-white text-3xl font-semibold">
          About me
        </h1>
        <p className="text-center text-gray-800 dark:text-gray-300 text-[12px]">My introduction </p>
      </div>

      <div className="flex sm:flex-row flex-col justify-between    sm:gap-12">
        <img ref={tiltRef} src="/image.jpg" className="sm:w-[320px] w-[250px] self-center tilt-element rounded-md img-shadow " />
        <div className="flex flex-col items-start gap-3 mx-3 sm:text-start text-center ">
          <p className=" dark:text-gray-300 text-gray-800 text-[15px] mt-10">
            Hey there, I am Mradul a 21-year-old student who is currently
            pursuing Btech in CSE. I am passionate about Software Development and Product management
          </p>
          <button className="py-2 text-white px-2 bg-indigo-700  text-sm font-medium rounded-md  hover:bg-indigo-800 transition-all flex items-center gap-1  sm:self-start self-center">Resume <TiDocumentText /></button>
        </div>
      </div>
      
    </div>
  );
}
