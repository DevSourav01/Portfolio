import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

// Projects data
const projects = [
  {
    title: "GitHub Finder",
    tech: "React, TypeScript, Tailwind CSS",
    description:
      "A web app to search any GitHub user by username and view their avatar, bio, location, public repos, followers, and following count. Features a loading spinner, error handling for invalid usernames, and a fully responsive design.",
    git: "https://github.com/DevSourav01/Github-Finder",
    live: "https://github-finder-mu-khaki.vercel.app/",
  },
  {
    title: "DevConnect",
    tech: "React, TypeScript, Tailwind CSS, Firebase, Firestore",
    description:
      "A developer networking platform with Firebase Auth, real-time post feed with likes and comments, follow/unfollow connections, skill-based filtering, GitHub repo integration, and protected routes with Firestore security rules.",
    git: "https://github.com/DevSourav01/DevConnect",
    live: "https://dev-connect-pied.vercel.app/login",
  },
  {
    title: "CareerSync – HR Dashboard",
    tech: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui",
    description:
      "An ongoing HR dashboard project built with Next.js and shadcn/ui, designed to streamline recruitment and candidate management workflows.",
    git: "https://github.com/DevSourav01/Career-Sync-Dashboard",
    live: "https://career-sync-dashboard.vercel.app/",
  },
];
// Parent container variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card animation
    },
  },
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 0.5,
    },
  },
};

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="projects">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 underline decoration-amber-500 underline-offset-8">
        💼 Projects
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
      className="group p-6 rounded-2xl border border-gray-700 bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform"
    >
      <h3 className="text-2xl font-bold text-amber-400 mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 mb-3">{project.tech}</p>
      <p className="text-gray-300 mb-6">{project.description}</p>

      <div className="flex items-center gap-4">
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition duration-200 shadow-md"
        >
          <FaGithub className="text-xl" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-semibold transition duration-200 shadow-md"
        >
          <FaExternalLinkAlt className="text-xl" />
          <span className="hidden sm:inline">Live</span>
        </a>
      </div>
    </motion.div>
  );
}

export default Projects;
