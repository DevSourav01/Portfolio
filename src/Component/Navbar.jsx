import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const navItems = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certificate",
    "Contact",
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the mobile menu when an item is clicked
  };

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <div
        className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[70vw] max-w-[520px] min-w-[305px] items-center justify-center gap-3 px-6 py-3 
        bg-transparent backdrop-blur-lg border border-cyan-400 shadow-lg rounded-full z-50 transition-all duration-300 animate-glow hidden sm:flex"
      >
        {navItems.map((item) => (
          <p
            key={item}
            onClick={() => handleScroll(item)}
            className="cursor-pointer text-white text-sm md:text-base lg:text-lg whitespace-nowrap transition-all duration-300 hover:text-cyan-400"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Mobile Navbar (Hamburger Icon) */}
      <div className="fixed top-5 right-5 sm:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
          className="text-white text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Display hamburger or close icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[rgb(23,23,23)] bg-opacity-95 flex flex-col 
        items-center justify-center gap-6 transition-transform duration-300 ease-in-out 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden z-40`}
      >
        {navItems.map((item) => (
          <p
            key={item}
            onClick={() => handleScroll(item)}
            className="text-white text-2xl cursor-pointer transition-all duration-300 hover:text-cyan-400"
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}

export default Navbar;
