import React, { useRef } from "react";
import { FaFilePdf } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

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
    pdf: "https://drive.google.com/file/d/1efy3l2NFEUQwgebgSfxi_i0-cAgZNNUUQw/view?usp=sharing",
  },
];

// Parent container for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
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
    },
  },
};

function Certificate() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 underline decoration-amber-500 underline-offset-8">
        📜 Certificates
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </motion.div>
    </div>
  );
}

function CertificateCard({ cert }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
      className="group p-6 rounded-2xl bg-[rgb(23,23,23)] border border-gray-700 hover:border-amber-500 shadow-lg transition-transform duration-300"
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
    </motion.div>
  );
}

export default Certificate;
