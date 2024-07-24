import React, { useState } from "react";

import { IoSend } from "react-icons/io5";

export default function ContactMe() {
  const [successMessage, setSuccessMessage] = useState(null);

  const submitHandler = (e) => {
    setSuccessMessage(null);
    e.preventDefault();
    setSuccessMessage("Message sent successfully");
  };
  return (
    <div id="contact" className="w-full  py-16 mt-10 flex flex-col   gap-20 ">
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-white">
          Contact Me
        </h1>
        <span className="text-center text-xs text-gray-300">
          Want to connect? My inbox is always open
        </span>
      </div>
      
      <form onSubmit={submitHandler} className="flex flex-col gap-3 mx-20">
      {successMessage && <button className="text-sm bg-indigo-600 rounded-md  py-3 px-2 text-gray-200 font-medium">{successMessage}</button>}
        <div className="flex gap-2">
          <input
            className="grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600 placeholder:font-medium   border-indigo-700 border-[2px] placeholder:text-sm plac"
            type="text"
            placeholder="Name"
          />
          <input
            className=" placeholder:font-medium   grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]  placeholder:text-sm"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>

        <input
          className=" placeholder:font-medium   placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
          type="text"
          placeholder="Subject"
          name=""
          id=""
        />

        <textarea
          rows="6"
          className=" placeholder:font-medium   placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
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
