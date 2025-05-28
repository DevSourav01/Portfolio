import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

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

  return (
    <>
      {/* Contact Section */}
      <div className="max-w-5xl mx-auto mt-20 px-6 py-12 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 underline decoration-amber-500 underline-offset-8">
          📞 Contact Me
        </h2>
        <p className="text-center text-lg text-white mb-10">
          Feel free to reach out for collaborations or job opportunities!
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 bg-[rgb(30,30,30)] border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 bg-[rgb(30,30,30)] border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-4 bg-[rgb(30,30,30)] border border-gray-600 text-white rounded-lg resize-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-lg shadow-md hover:from-yellow-400 hover:to-amber-500 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://linkedin.com/in/sourav-nandi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:scale-110 hover:text-blue-400 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/DevSourav01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:scale-110 hover:text-white transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:thugsourav1998@gmail.com"
              className="text-red-500 hover:scale-110 hover:text-red-400 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/+919064345278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 hover:text-green-400 transition-transform"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Outside Main Container */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-2 z-50 border-2 text-white p-4 rounded-full shadow-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-125 animate-bounce"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}
    </>
  );
}

export default Contact;
