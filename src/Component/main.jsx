import React from "react";
import picofme from "../assets/picofme.png";

function Main() {
  return (
    <div className="main flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="left w-full md:w-[60vw] p-6 border-l-4 border-amber-500 shadow-md rounded-lg bg-white">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Hello, I'm <span className="text-amber-500">Sourav Nandi.</span>
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Passionate Frontend Developer | Crafting modern & responsive UIs.
        </p>
        <button className="mt-6 px-6 py-3 bg-amber-500 text-white text-lg cursor-pointer font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
          Let's Connect
        </button>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-[30vw] flex justify-center mt-10 md:mt-0">
        <img
          src={picofme}
          alt="Sourav Nandui"
          className="w-64 h-64 object-cover rounded-full border-4 border-amber-500 shadow-lg relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-8 before:border-amber-500 before:blur-lg before:opacity-75 before:animate-pulse"
        />
      </div>
    </div>
  );
}

export default Main;
