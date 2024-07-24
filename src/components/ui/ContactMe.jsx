import React, { useState } from "react";

import { IoSend } from "react-icons/io5";

export default function ContactMe() {
  const [successMessage, setSuccessMessage] = useState(null);
  setTimeout(() => {
    setSuccessMessage(null)
    
  }, 5000);

  const submitHandler = (e) => {
    setSuccessMessage(null);
    
    e.preventDefault();
    setSuccessMessage("Message sent successfully");
    e.target.reset();
  };
  return (
    <div id="contactme" className=" py-8  sm:py-16 sm:mt-10 flex flex-col gap-10   sm:gap-20 ">
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-white">
          Contact Me
        </h1>
        <span className="text-center text-xs text-gray-300">
          Feel free to connect with Me
        </span>
      </div>
      
      <form onSubmit={submitHandler} className="flex flex-col gap-3 mx-2 sm:mx-20">
      {successMessage && <button className="text-sm bg-indigo-600 rounded-md  py-3 px-2 text-gray-200 font-medium">{successMessage}</button>}
        <div className="flex sm:flex-row flex-col gap-2">
          <input required
            className=" text-gray-400 grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600 placeholder:font-medium   border-indigo-700 border-[2px] placeholder:text-sm plac"
            type="text"
            placeholder="Name"
          />
          <input required
            className=" placeholder:font-medium  text-gray-400  grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]  placeholder:text-sm"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>

        <input required
          className=" placeholder:font-medium text-gray-400   placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
          type="text"
          placeholder="Subject"
          name=""
          id=""
        />

        <textarea required
          rows="6"
          className=" placeholder:font-medium  text-gray-400  placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
          type="text"
          placeholder="Message"
        />
        <button className=" self-start text-xs text-white bg-indigo-700 py-3 px-3 flex items-center gap-2 rounded-md">
          Send Message <IoSend className="text-xs" />
        </button>
      </form>
    </div>
  );
}
