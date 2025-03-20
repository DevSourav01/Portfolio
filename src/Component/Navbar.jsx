import React from "react";

function Navbar() {
  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[70vw] max-w-[500px] min-w-[280px] flex  items-center justify-center gap-3 px-6 py-3 bg-gray-900 border border-cyan-400 shadow-lg rounded-full z-50 transition-all duration-300 animate-glow ">
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
  );
}

export default Navbar;
