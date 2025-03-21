import React from "react";
import { FaFilePdf} from "react-icons/fa";

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
    <div className="max-w-5xl mx-auto mt-20 p-10 bg-[rgb(22,22,22)] min-h-screen rounded-lg shadow-md">
      <h2 className="text-5xl font-extrabold text-white text-center border-l-4 border-amber-500 pl-4 mb-10">
        Certificate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-[rgb(23,23,23)] border-l-4 border-amber-500 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-lg text-gray-400 mb-4">{cert.platform}</p>

            <div className="flex gap-4">
              {/* View Certificate Button */}
              <div className="relative group">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all"
                >
                  <FaFilePdf className="text-xl" /> View
                </a>
                <span className="absolute left-1/2 -top-10 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all">
                  View
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
