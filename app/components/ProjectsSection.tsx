"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// --- Interface ---
interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
}

// --- Project Data ---
const projects: Project[] = [
  {
    title: "Portfolio Website",
    subtitle: "Next.js + Tailwind CSS",
    imageUrl: "https://placehold.co/800x600/0EA5E9/ffffff?text=Portfolio+UI",
  },
  {
    title: "E-commerce Platform",
    subtitle: "React + Node + MongoDB",
    imageUrl: "https://placehold.co/800x600/10B981/ffffff?text=E-commerce",
  },
  {
    title: "Weather App",
    subtitle: "React + OpenWeather API",
    imageUrl: "https://placehold.co/800x600/FBBF24/000000?text=Weather+App",
  },
  {
    title: "Job Portal",
    subtitle: "Next.js + Supabase",
    imageUrl: "https://placehold.co/800x600/DC2626/ffffff?text=Job+Portal",
  },
];

// --- Animation Variants ---
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier easeOut
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// --- Main Component ---
const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent  py-20 px-6"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm tracking-widest uppercase text-yellow-400 font-semibold mb-2">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          My Recent Works
        </h2>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-shadow duration-500"
            initial="hidden"
            whileInView="show"
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
          View All Projects
        </button>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
