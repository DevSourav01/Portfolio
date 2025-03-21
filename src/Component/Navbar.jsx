import React from "react";

function Navbar() {
  const navItems = ["About", "Skills", "Experience", "Projects", "Certificate","Contact"];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[70vw] max-w-[520px] min-w-[305px] items-center justify-center gap-3 px-6 py-3 
      bg-transparent backdrop-blur-lg  border border-cyan-400 shadow-lg rounded-full z-50 transition-all duration-300 animate-glow hidden sm:flex">

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

      {/* Mobile Navbar (Bottom) */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[70vw] max-w-[500px] min-w-[300px] flex items-center justify-center gap-2 px-6 py-3 bg-[rgb(23,23,23)] border border-cyan-400 shadow-lg rounded-full z-50 transition-all duration-300 animate-glow 
      sm:hidden">
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
    </>
  );
}

export default Navbar;
