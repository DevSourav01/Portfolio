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
    <div className="max-w-5xl mx-auto mt-20 p-10 bg-[rgb(22,22,22)] min-h-screen rounded-lg shadow-md">
      <h2 className="text-5xl font-extrabold text-white text-center border-l-4 border-amber-500 pl-4 mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-[rgb(23,23,23)] border-l-4 border-amber-500 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-lg text-white mb-2">{project.tech}</p>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex gap-4 mt-3">
              {/* GitHub Button with Tooltip */}
              <div className="relative group">
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -top-10 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all">
                  Github
                </span>
              </div>

              {/* Live Demo Button with Tooltip */}
              <div className="relative group">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
                {/* Tooltip */}
                <span className="absolute left-1/2 -top-10 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all">
                  Preview
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
