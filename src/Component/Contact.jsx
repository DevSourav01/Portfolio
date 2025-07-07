import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

function Contact() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Social icons stagger container
  const socialContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Social icon animation
  const socialIcon = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const socialRef = useRef(null);
  const socialInView = useInView(socialRef, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        ref={formRef}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 underline decoration-amber-500 underline-offset-8">
          📞 Contact Me
        </h2>
        <p className="text-center text-lg text-white mb-10">
          Feel free to reach out for collaborations or job opportunities!
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-2xl mx-auto space-y-6">
          {["Name", "Email", "Message"].map((label) =>
            label !== "Message" ? (
              <div key={label}>
                <label className="block text-white font-semibold mb-2">
                  {label}
                </label>
                <motion.input
                  required
                  type={label === "Email" ? "email" : "text"}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full p-4 bg-[rgb(30,30,30)] border border-gray-600 text-white rounded-lg placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:scale-[1.02] transition-transform duration-200"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            ) : (
              <div key={label}>
                <label className="block text-white font-semibold mb-2">
                  {label}
                </label>
                <motion.textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-4 bg-[rgb(30,30,30)] border border-gray-600 text-white rounded-lg resize-none placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:scale-[1.02] transition-transform duration-200"
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </div>
            )
          )}
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-lg shadow-md hover:from-yellow-400 hover:to-amber-500 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #f59e0b" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <motion.div
          ref={socialRef}
          initial="hidden"
          animate={socialInView ? "visible" : "hidden"}
          variants={socialContainer}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6 text-3xl">
            {[
              {
                href: "https://linkedin.com/in/sourav-nandi01",
                icon: <FaLinkedin />,
                color: "text-blue-500",
                hoverColor: "hover:text-blue-400",
              },
              {
                href: "https://github.com/DevSourav01",
                icon: <FaGithub />,
                color: "text-gray-200",
                hoverColor: "hover:text-white",
              },
              {
                href: "mailto:thugsourav1998@gmail.com",
                icon: <FaEnvelope />,
                color: "text-red-500",
                hoverColor: "hover:text-red-400",
              },
              {
                href: "https://wa.me/+919064345278",
                icon: <FaWhatsapp />,
                color: "text-green-500",
                hoverColor: "hover:text-green-400",
              },
            ].map(({ href, icon, color, hoverColor }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIcon}
                whileHover="hover"
                className={`${color} ${hoverColor} transition-transform`}
                aria-label={`Link to ${href}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button - Outside Main Container */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.2, backgroundColor: "#d97706" }}
          className="fixed bottom-28 right-4 z-50 border-2 border-amber-500 text-white p-4 rounded-full shadow-xl transition-all duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm" />
        </motion.button>
      )}
    </>
  );
}

export default Contact;
