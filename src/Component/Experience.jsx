import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Curetech Services (NEC Project)",
    role: "Service Desk Engineer",
    duration: "May 2025 - Present",
    description:
      "Managed ~400 cases/month using ServiceNow and 3CLogic, achieving 95% SLA compliance. Troubleshot hardware, software, and network issues, documented solutions in knowledge base, improving team efficiency by 10%. Collaborated with L2 engineers for escalations, ensuring timely resolutions.",
  },
  {
    company: "Tech Mahindra",
    role: "Customer Support Associate",
    duration: "June 2022 - November 2023",
    description:
      "Handled customer queries and provided solutions for Flipkart users. Assisted in resolving issues related to orders, payments, and deliveries.",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="experience">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 underline decoration-pink-500 underline-offset-8">
        🧑‍💻 Experience
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, boxShadow: "0 0 15px 3px rgba(255, 105, 180, 0.6)" }}
      className="relative rounded-2xl p-8 bg-gradient-to-tr from-[#2a1a2a] to-[#1a1a2a] border border-pink-600 shadow-md cursor-pointer transition-shadow duration-300"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500" />

      <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
      <p className="text-lg text-pink-400 font-semibold mb-1">{exp.role}</p>
      <p className="text-sm italic text-gray-400 mb-6">{exp.duration}</p>
      <p className="text-gray-300 leading-relaxed">{exp.description}</p>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />
    </motion.div>
  );
}

export default Experience;
