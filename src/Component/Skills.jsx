import React, { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiOpenai } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 80 },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" />, level: 70 },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
  { name: "ChatGPT API", icon: <SiOpenai className="text-green-500" />, level: 90 },
];

function Skills() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const updatedProgress = {};
      skillsData.forEach((skill) => {
        updatedProgress[skill.name] = skill.level;
      });
      setProgress(updatedProgress);
    }, 500); // Delay to trigger animation
  }, []);

  return (
    <div className="skills-container max-w-4xl mx-auto mt-20 p-6 bg-[rgb(22,22,22)] rounded-lg">
      <h2 className="text-4xl font-bold text-white text-center mb-6">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card flex flex-col items-center p-4 bg-[rgb(23,23,23)] shadow-md cursor-pointer rounded-lg transition-transform transform hover:scale-105">
            {/* Icon */}
            <div className="text-5xl mb-2 transition-transform transform hover:scale-110">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 mt-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${progress[skill.name] || 0}%` }}
              ></div>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
