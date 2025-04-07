import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Finder",
    tech: "React, JavaScript, HTML, CSS",
    description:
      "A web app that fetches movie details using an API. Users can search for movies, view ratings, and get recommendations.",
    git: "https://github.com/DevSourav01/Movie-Finder",
    live: "https://movie-finder-liart-phi.vercel.app/",
  },
  {
    title: "E-commerce App",
    tech: "HTML, CSS, JavaScript",
    description:
      "A simple e-commerce frontend with product listings, a shopping cart, and a checkout page.",
    git: "https://github.com/DevSourav01/E-commerse-App",
    live: "https://e-commerse-app-alpha.vercel.app/",
  },
  {
    title: "Music Player",
    tech: "HTML, CSS",
    description:
      "A minimal music player with basic controls like play, pause, and volume adjustment.",
    git: "https://github.com/DevSourav01/Music-Player",
    live: "https://music-player-myn8.vercel.app/",
  },
  {
    title: "BMI Calculator",
    tech: "HTML, CSS, JavaScript",
    description:
      "A web tool that calculates BMI based on user input and provides health recommendations.",
    git: "https://github.com/DevSourav01/BMI-Calculator",
    live: "https://bmi-calculator-one-henna.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="projects">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 underline decoration-amber-500 underline-offset-8">
        💼 Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl border border-gray-700 bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{project.tech}</p>
            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition duration-200 shadow-md"
              >
                <FaGithub className="text-xl" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* Live */}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
