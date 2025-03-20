import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Tech Mahindra",
      role: "Customer Support Associate",
      duration: "June 2022 - November 2023",
      description:
        "Handled customer queries and provided solutions for Flipkart users. Assisted in resolving issues related to orders, payments, and deliveries.",
    },
    {
      company: "Conneqt Business Solutions",
      role: "Customer Support Associate",
      duration: "April 2024 - July 2024",
      description:
        "Managed customer interactions and resolved queries effectively. Provided support for technical and non-technical issues.",
    },
  ];

  return (
    <div className="experience-container max-w-5xl mx-auto mt-20 p-10">
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative p-6 bg-white border border-gray-300 shadow-md rounded-lg transition-transform transform hover:scale-[1.02] hover:shadow-lg duration-300"
          >
            {/* Floating Decorative Element */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <h3 className="text-3xl font-semibold text-gray-800">{exp.company}</h3>
            <p className="text-lg text-gray-600 font-medium">{exp.role}</p>
            <p className="text-md text-gray-500 italic">{exp.duration}</p>
            <p className="text-gray-700 mt-4 leading-relaxed">{exp.description}</p>

            {/* Animated Gradient Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
