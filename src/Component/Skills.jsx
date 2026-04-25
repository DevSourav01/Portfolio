import React, { useEffect, useState, useRef } from "react";
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
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiMui,
  SiPwa,
  SiOpenai,
  SiNextdotjs,  
  SiFirebase,
  SiShadcnui,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import {motion, useInView } from "framer-motion";

// Skill data
const skillsData = [
  { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 85 },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-white" />, level: 75 },
  { name: "Material UI", icon: <SiMui className="text-blue-300" />, level: 85 },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75 },
  { name: "React Router", icon: <SiReactrouter className="text-pink-600" />, level: 80 },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 80 },
  { name: "Firestore", icon: <SiFirebase className="text-orange-400" />, level: 75 },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
  { name: "Responsive Design", icon: <SiPwa className="text-green-400" />, level: 90 },
  { name: "Accessibility", icon: <FaUniversalAccess className="text-orange-300" />, level: 80 },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-500" />, level: 90 },
  { name: "Error Boundaries", icon: <SiTypescript className="text-indigo-400" />, level: 75 },
  { name: "Offline Support", icon: <SiPwa className="text-yellow-400" />, level: 70 },
];

// Scroll animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.5,
      duration: 0.1,
    },
  },
};


function Skills() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 underline decoration-amber-500 underline-offset-8">
        🛠️ Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setProgress(skill.level);
      }, 100); // slight delay for smoother feel
      return () => clearTimeout(timeout);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105"
    >
      <div className="text-5xl mb-4" title={skill.name}>
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
      <div className="w-full bg-white/20 rounded-full h-3 mb-2">
        <motion.div
          className="bg-amber-400 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2 }}
        />
      </div>
      <span className="text-white text-xs">{progress}%</span>
    </motion.div>
  );
}

export default Skills;
