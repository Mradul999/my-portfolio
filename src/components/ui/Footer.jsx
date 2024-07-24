import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" w-full  py-24 px-36  flex footer-bg  text-white   justify-around ">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">Mradul Verma</h1>
        <span className="text-sm font-medium">Full Stack Developer</span>
      </div>
      <ul className="flex gap-3 text-sm font-medium">
        {" "}
        <li>
          <a className="hover:text-indigo-800 transition-all" href="#about">About</a>
        </li>
        <li>
          <a className="hover:text-indigo-800 transition-all" href="#projects">Projects</a>
        </li>
        <li>
          {" "}
          <a className="hover:text-indigo-800 transition-all" href="#contactme">Contact Me</a>{" "}
        </li>
      </ul>
      <ul className="flex gap-2 text-base font-semibold">
        <li> <a target=" _blank" href=""><IoLogoInstagram className="hover:text-indigo-800 transition-all" /></a>
          
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/mradul-verma-b74048254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className="hover:text-indigo-800 transition-all" /></a>
          
        </li>
        <li>
          <a target="_blank" href="https://github.com/Mradul999"><AiFillGithub className="hover:text-indigo-800 transition-all" /></a>
          
        </li>
      </ul>
    </div>
  );
}
