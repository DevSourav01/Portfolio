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
   
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="experience">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        🧑‍💻 Experience
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative border border-gray-700 bg-gradient-to-br from-[#1e1e1e] to-[#111111] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

            <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
            <p className="text-lg text-blue-400 font-medium">{exp.role}</p>
            <p className="text-sm text-gray-400 italic mb-4">{exp.duration}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
