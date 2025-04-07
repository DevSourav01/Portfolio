import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaUniversalAccess,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiOpenai,
  SiReactrouter,
  SiMui,
  SiPwa,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" />, level: 85 },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-500" />, level: 90 },
  { name: "React Router", icon: <SiReactrouter className="text-pink-600" />, level: 80 },
  { name: "Material UI", icon: <SiMui className="text-blue-300" />, level: 85 },
  { name: "Responsive Design", icon: <SiPwa className="text-green-400" />, level: 90 },
  { name: "Accessibility", icon: <FaUniversalAccess className="text-orange-300" />, level: 80 },
  { name: "Error Boundaries", icon: <SiTypescript className="text-indigo-400" />, level: 75 },
  { name: "Offline Support", icon: <SiPwa className="text-yellow-400" />, level: 70 },
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
    }, 400);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 underline decoration-amber-500 underline-offset-8">
        🛠️ Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[rgb(23,23,23)] p-5 rounded-xl shadow-md hover:shadow-amber-500/30 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-2">
              <div
                className="h-2 bg-gradient-to-r from-blue-400 to-amber-400 transition-all duration-1000 ease-in-out"
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
