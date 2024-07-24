import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSun } from "react-icons/ci";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="flex flex-col">
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
        <CiSun className=" text-2xl text-white sm:block hidden   " />
        <div className="flex sm:hidden gap-2">
          <CiSun className=" text-2xl text-white    " />

          <RxHamburgerMenu
            onClick={handleDropdown}
            className="text-white text-2xl "
          />
        </div>
      </div>

      <div
        className={`text-white bg-indigo-500 p-2 transition-all duration-300 ${
          dropdown ? " opacity-100 max-h-full" : "opacity-0 max-h-0"
        } `}
      >
        {" "}
        <ul className="flex flex-col gap-3">
          {" "}
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li> <a href="#qualifications">Qualifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactme">Contact me</a></li>
        </ul>
      </div>
    </div>
  );
}
