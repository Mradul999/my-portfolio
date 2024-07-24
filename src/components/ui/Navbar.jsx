import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSun } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className=" flex  justify-between         py-4 text-[14px] font-medium mx-2  z-10 bg">
      <div className="text-white  cursor-pointer  hover:text-indigo-700    transition-all">
        Mradul
      </div>
      <ul className=" gap-3 text-white sm:flex hidden text-sm  ">
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
      </ul>
      <div className="flex sm:hidden gap-2">
        <CiSun className=" text-2xl text-white   " />
        <RxHamburgerMenu className="text-white text-2xl " />
      </div>
    </div>
  );
}
