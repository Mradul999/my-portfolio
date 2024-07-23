import React from "react";

export default function Navbar() {
  return (
    <div className="w-[75%]  flex justify-between  py-4 text-[14px] font-medium fixed   top-0 mx-3  z-10 bg">
      <div className="text-white cursor-pointer hover:text-indigo-700   transition-all">
        Mradul
      </div>
      <ul className=" gap-3 text-white sm:flex hidden ">
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#about">About</a>{" "}
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#skills">Skills</a>
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#qualifications">Qualifications</a>
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a href="#contactme">Contact me</a>
        </li>
        <li className="cursor-pointer hover:text-indigo-700  transition-all">
          <a>Mode</a>
        </li>
      </ul>
    </div>
  );
}
