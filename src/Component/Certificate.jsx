import React from "react";
import { FaFilePdf } from "react-icons/fa";

const certificates = [
  {
    title: "DSA in Career Camp | Introduction to Python",
    platform: "Coding Ninjas",
    pdf: "https://drive.google.com/file/d/1zPp_PTmjVE1nlxTMxmr9BG8XovsvF4oC/view?usp=sharing",
  },
  {
    title: "Bootcamp | Front End | Full Stack Development",
    platform: "Coding Ninjas",
    pdf: "https://drive.google.com/file/d/17-C6E39EpVHtICt5lLzNFauy3R4P9CiM/view?usp=sharing",
  },
  {
    title: "Career Camp | Data Structures in Python",
    platform: "Coding Ninjas",
    pdf: "https://drive.google.com/file/d/1efy3l2NFEUQwgebgSfxi_i0-cAgZNNUU/view?usp=sharing",
  },
];

function Certificate() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 underline decoration-amber-500 underline-offset-8">
        📜 Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-[rgb(23,23,23)] border border-gray-700 hover:border-amber-500 shadow-lg transition-transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{cert.platform}</p>

            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-lg shadow-md hover:from-yellow-400 hover:to-amber-500 transition-all"
            >
              <FaFilePdf className="text-lg" />
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
