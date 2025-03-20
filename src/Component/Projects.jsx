import React from "react";

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
    <div className="max-w-5xl mx-auto mt-20 p-10 bg-gray-100 min-h-screen rounded-lg shadow-md">
      <h2 className="text-5xl font-extrabold text-gray-800 text-center border-l-4 border-amber-500 pl-4 mb-10">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white border-l-4 border-amber-500 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-lg text-gray-600 mb-2">{project.tech}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex gap-4 mt-3">
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
