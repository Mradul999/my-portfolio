import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="w-full flex  gap-16 text-white items-center ">
      <img
        src={project.image}
        className="  w-[350px] h-[190px] rounded-lg card-img"
        alt=""
      />
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-semibold tracking-wide">{project.title}</h1>
        <p className="text-gray-400 text-[13px]">{project.description}</p>
        <a target="_blank" href={project.projectLink}>
          <button className="text-[12px] font-semibold py-2 px-2 hover:bg-indigo-800 transition-all bg-indigo-700 flex items-center gap-1 rounded-md">
            Check Out <FaArrowRight className="text-[10px]" />
          </button>
        </a>
      </div>
    </div>
  );
}
