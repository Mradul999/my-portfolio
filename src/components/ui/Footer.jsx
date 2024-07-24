import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div
      className=" sm:gap-0 gap-10 w-full py-16  sm:py-24 sm:px-36 px-2  flex sm:flex-row flex-col   text-white dark:bg-footer-dark bg-indigo-800
        justify-around "
    >
      <div className="flex flex-col sm:gap-0 gap-2">
        <h1 className="text-3xl font-semibold">Mradul Verma</h1>
        <span className="text-sm font-medium">Full Stack Developer</span>
      </div>
      <ul className="flex gap-3 sm:flex-row flex-col text-sm font-medium">
        {" "}
        <li>
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#projects">
            Projects
          </a>
        </li>
        <li>
          {" "}
          <a className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" href="#contactme">
            Contact Me
          </a>{" "}
        </li>
      </ul>
      <ul className="flex gap-3 text-xl font-semibold">
        <li>
          {" "}
          <a target=" _blank" href="">
            <a
              target="_target"
              href="https://www.instagram.com/catsaredramatic99/"
            >
              <IoLogoInstagram className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
            </a>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mradul-verma-b74048254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedinIn className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Mradul999">
            <AiFillGithub className="dark:hover:text-indigo-800 hover:text-violet-700  transition-all" />
          </a>
        </li>
      </ul>
    </div>
  );
}
