import React from "react";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-10 bg-white shadow-lg rounded-lg min-h-[60vh] flex flex-col justify-center items-center">
      <h2 className="text-5xl font-extrabold text-gray-800 text-center border-l-4 border-amber-500 pl-4 mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-xl">
        Feel free to reach out for collaboration or job opportunities!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
           required
            type="text"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
          required
            type="email"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            rows="5"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
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

      {/* Social Links */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Connect with Me</h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://linkedin.com/in/sourav-nandi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:scale-110 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DevSourav01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-bold hover:scale-110 transition-transform"
          >
            GitHub
          </a>
          <a
            href="mailto:thugsourav1998@gmail.com"
            className="text-red-500 font-bold hover:scale-110 transition-transform"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;