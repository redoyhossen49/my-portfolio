import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-6 sm:px-12 md:px-20"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-10 text-lg md:text-xl">
          I’m currently open to opportunities and collaborations. Fill out the form below or connect with me on social media.
        </p>

        {/* Success Message */}
        {submitted && (
          <p className="mb-6 text-green-600 font-semibold text-center animate-fade-in">
            ✅ Thank you! Your message has been sent.
          </p>
        )}

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xrbyallp" // তোমার Form ID বসাও
          method="POST"
          className="grid grid-cols-1 gap-6"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <textarea
            name="message"
            rows="6"
            required
            placeholder="Write your message here..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 text-2xl text-blue-600">
          <a
            href="https://github.com/hridoy000111"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://fiverr.com/hridoy000111"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600 transition-colors duration-300"
          >
            <SiFiverr />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
