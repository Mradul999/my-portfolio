import React from "react";
import { CarouselDemo } from "./CarouselDemo";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full py-16 mt-10 flex flex-col   gap-10 "
    >
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-white">
          Projects
        </h1>
        <span className="text-center text-[12px] text-gray-300">
          Most recent work
        </span>
      </div>

      <div className="w-full flex justify-center">
        <CarouselDemo/>

      </div>
    </div>
  );
}
