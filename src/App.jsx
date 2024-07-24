import React from "react";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Skills from "./components/ui/Skills";
import Qualification from "./components/ui/Qualification";

export default function App() {
  return (
    <div className=" min-h-screen flex justify-center bg   ">
      <div className="max-w-[1000px] w-full ">
        <Navbar />
        <Home />

        <About />
        <Skills />
        <Qualification />
      </div>
    </div>
  );
}
