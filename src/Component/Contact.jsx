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
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-10 bg-[rgb(22,22,22)] shadow-lg rounded-lg min-h-[60vh] flex flex-col justify-center items-center relative">
      <h2 className="text-5xl font-extrabold text-white text-center border-l-4 border-amber-500 pl-4 mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-white text-center mb-6 max-w-xl">
        Feel free to reach out for collaboration or job opportunities!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg space-y-5">
        <div>
          <label className="block text-white font-semibold">Name</label>
          <input
            required
            type="text"
            className="w-full p-4 border-2 border-gray-300 placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[rgb(30,30,30)]"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-white font-semibold">Email</label>
          <input
            required
            type="email"
            className="w-full p-4 border-2 placeholder-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[rgb(30,30,30)]"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-white font-semibold">Message</label>
          <textarea
            rows="5"
            className="w-full p-4 border-2 placeholder-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[rgb(30,30,30)]"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Social Links with Icons */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-3">
          Connect with Me
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/sourav-nandi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DevSourav01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 text-3xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:thugsourav1998@gmail.com"
            className="text-red-500 text-3xl hover:scale-110 transition-transform"
            target="_blank"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/+919064345278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 border-2 text-white p-4 rounded-full shadow-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-125 animate-bounce"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}
    </div>
  );
}

export default Contact;
