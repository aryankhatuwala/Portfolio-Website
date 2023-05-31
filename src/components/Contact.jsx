import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen m-300 bg-gradient-to-b from-black via-black to-amber-600 p-4 text-white mt-30"
    >
      <div className=" max-w-screen-lg mx-auto h-full flex flex-col p-4 justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Please enter your details to contact me:</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/6f7e1d52-3180-41f6-b70d-409148018de6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Thank you
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;