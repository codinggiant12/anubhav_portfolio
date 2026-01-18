"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

// --- Animations ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// --- Main Component ---
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-sans bg-transparent min-h-screen w-full flex flex-col justify-center py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-yellow-400 mb-2">
          Contact Me
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Let's Start a Project Together
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Reach out via the form or use one of the contact options below to
          discuss your ideas.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Animation (Decor or Info) */}
        <motion.div
          className="hidden lg:block"
          initial="hidden"
          whileInView="show"
          variants={slideInLeft}
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* h-[400px] bg-gradient-to-br */}
          <div className="relative w-full  from-yellow-400 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <h3 className="text-white text-3xl font-extrabold text-center leading-snug drop-shadow-md">
              Let’s Bring <br /> Your Ideas <br /> to Life 🚀
            </h3>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border-4 border-yellow-400/30"
          initial="hidden"
          whileInView="show"
          variants={slideInRight}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-150"
              />
              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-150"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-150"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 transition duration-150 resize-none"
            />

            {/* Button  bg-gradient-to-r*/}
            <button
              type="submit"
              className="w-full px-6 py-3  from-red-500 to-yellow-400 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform active:scale-95"
            >
              Send Message 🚀
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
