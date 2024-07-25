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
    <div id="about" className="flex  flex-col  gap-8   ">
      <div className="flex flex-col gap-1 ">
        <h1 className="text-center text-gray-800 dark:text-white text-3xl font-semibold">
          About me
        </h1>
        <p className="text-center text-gray-800 dark:text-gray-300 text-[12px]">
          My introduction{" "}
        </p>
      </div>

      <div className="flex sm:flex-row flex-col  sm:px-16 overflow-x-hidden       sm:gap-12">
        <div ref={tiltRef} className="w-full mx-3 flex justify-center relative py-6  ">
          <img
            src="/imgBg.png"
            className=" self-center size-[250px] sm:size-[350px] tilt-element rounded-md img-shadow "
          />
          <img
            src="/profile.png"
            className=" h-[270px] sm:h-[370px] rounded-md     absolute top-1 "
          />
        </div>

        <div className="flex flex-col items-start gap-3 mx-3 sm:text-start text-center ">
          <p className=" dark:text-gray-300 text-gray-800 text-[15px] mt-10">
            Hey there, I am Mradul a 21-year-old student who is currently
            pursuing Btech in CSE. I am passionate about Software Development
            and Product management
          </p>
          <button className="py-2 text-white px-2 bg-indigo-700  text-sm font-medium rounded-md  hover:bg-indigo-800 transition-all flex items-center gap-1  sm:self-start self-center">
            Resume <TiDocumentText />
          </button>
        </div>
      </div>
    </div>
  );
}
