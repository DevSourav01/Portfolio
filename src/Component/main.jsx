import React from "react";
import { TypeAnimation } from "react-type-animation";
import picofme from "../assets/picofme.png";

function Main() {
  return (
    <div className="main flex flex-col md:flex-row items-center justify-between p-10 min-h-screen">
      {/* Left Section */}
      <div className="left w-full md:w-[60vw] p-6 border-l-4 border-amber-500 shadow-md rounded-lg bg-[rgb(22,22,22)]">
        <h1 className="text-5xl font-extrabold text-white leading-tight">
          Hello, I'm <span className="text-amber-500">Sourav Nandi.</span>
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "<Passionate Frontend Developer />",
            1500,
            "<Crafting modern & responsive UIs />",
            1500,
            "<Bringing designs to life with React />",
            1500,
          ]}
          wrapper="p"
          speed={70}
          repeat={Infinity}
          className="text-2xl text-white mt-4"
          cursor={false}
          render={(text) => <p dangerouslySetInnerHTML={{ __html: text }} />}
        />

        <a
          href="/Sourav_Nandi_CV.pdf"
          download="Sourav_Nandi_CV.pdf"
          className="mt-6 mr-5"
        >
          <button className="px-6 py-3 bg-amber-500 text-white text-lg cursor-pointer font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
            Download CV
          </button>
        </a>

        <a href="mailto:thugsourav1998@gmail.com">
          <button className="mt-6 px-6 py-3 bg-amber-500 text-white text-lg cursor-pointer font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
            Hire Me
          </button>
        </a>
      </div>

      {/* Right Section with Glow Effect */}
      <div className="right w-full md:w-[30vw] flex justify-center mt-10 md:mt-0">
        <div className="relative flex items-center justify-center">
          {/* Glow Effect */}
          <div className="absolute w-64 h-64 rounded-full bg-amber-400 opacity-30 blur-xl animate-pulse"></div>

          {/* Image */}
          <img
            src={picofme}
            alt="Sourav Nandui"
            className="relative w-64 h-64 object-cover rounded-full border-4 border-amber-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
