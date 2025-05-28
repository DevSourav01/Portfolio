import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import picofme from "../assets/picofme.png";

function Main() {
  return (
    <div className="main flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left Section */}
      <div className="left w-full md:w-[60vw] p-6 border-l-4 border-amber-500 shadow-md rounded-lg bg-[rgb(22,22,22)]">
        <h1 className="text-4xl text-white leading-tight">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            Sourav Nandi.
          </span>
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "<Frontend Dev 🚀 />",
            1000,
            "<React & Tailwind 🎨 />",
            1000,
            "<Smooth UIs ✨ />",
            1000,
            "<Code to Reality 💻 />",
            1000,
          ]}
          wrapper="p"
          speed={70}
          repeat={Infinity}
          className="text-lg text-white mt-4 font-poppins"
          cursor={false}
          render={(text) => <p dangerouslySetInnerHTML={{ __html: text }} />}
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <a href="https://drive.google.com/file/d/1UuAw4Akk5QuJcKaBTSxMI50ziubowiJr/view?usp=sharing">
            <button className="flex items-center gap-2 px-4 py-1 bg-amber-500 text-white text-lg cursor-pointer font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
              <FaDownload /> Download CV
            </button>
          </a>

          <a href="mailto:thugsourav1998@gmail.com">
            <button className="flex items-center gap-2 px-6 py-1 bg-amber-500 text-white text-lg cursor-pointer font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
              <MdWork /> Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Section with Glow Effect */}
      <div className="right w-full md:w-[30vw] flex justify-center mt-10 md:mt-0">
        <div className="relative flex items-center justify-center">
          {/* Glow Effect */}
          <div className="absolute w-64 h-64 rounded-full bg-cyan-300 opacity-20 blur-[10px] animate-pulse"></div>

          {/* Image */}
          <img
            src={picofme}
            alt="Sourav Nandui"
            className="relative w-64 h-64 object-cover rounded-full border-2 border-amber-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
