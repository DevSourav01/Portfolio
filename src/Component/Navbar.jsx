import React, { useState } from "react";
import { TbUserCircle, TbStarFilled, TbBuilding, TbCode, TbAwardFilled, TbMessageCircle } from "react-icons/tb";

function Navbar() {
  const [activeId, setActiveId] = useState(null);

  const navItems = [
    { id: "about", icon: <TbUserCircle />, title: "About" },
    { id: "skills", icon: <TbStarFilled />, title: "Skills" },
    { id: "experience", icon: <TbBuilding />, title: "Experience" },
    { id: "projects", icon: <TbCode />, title: "Projects" },
    { id: "certificate", icon: <TbAwardFilled />, title: "Certificate" },
    { id: "contact", icon: <TbMessageCircle />, title: "Contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    } else {
      console.warn(`Section with ID "${id}" not found. Please ensure the section exists with the correct ID.`);
    }
  };

  return (
    <div
      className="fixed top-5 max-[450px]:bottom-5 max-[450px]:top-auto left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[520px] min-w-[280px] flex items-center justify-center gap-4 px-4 py-2 
      bg-transparent backdrop-blur-lg border border-cyan-900 shadow-sm rounded-full z-900 transition-all duration-300 animate-glow"
    >
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleScroll(item.id)}
          className={`
            cursor-pointer text-white text-lg sm:text-xl md:text-2xl p-2 rounded-full 
            ${activeId === item.id 
              ? 'text-blue-500 bg-amber-500 shadow-md scale-100 rotate-360' 
              : 'hover:bg-gray-700 hover:shadow-lg hover:text-blue-400 hover:scale-105 hover:rotate-2'
            } 
            transition-all duration-300
          `}
          title={item.title}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default Navbar;