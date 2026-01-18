import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import mainImage from "../../public/Gemini_Generated_Image_cuni54cuni54cuni.png";
// import Navbar from "./Navbar";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const HomeSection: React.FC = () => {
  const searchParams = useSearchParams();

  const contact = () => {
    const section = searchParams.get("section");
    if (section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const socialIcons = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/anubhav-chaurasiya-513a38299/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/codinggiant12",
      label: "GitHub",
    },

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/anubhav011010/",
      label: "Instagram",
    },
  ];
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src =
      "https://placehold.co/500x500/EAB308/ffffff?text=Image+Not+Found";
  };

  return (
    <div
      className="font-sans h-screen w-full bg-[#19151b] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Hero Section with clip-path */}
      <div
        id="hero-container"
        className="flex relative overflow-hidden h-full bg-black"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          background: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <div className="relative w-full flex justify-center pt-20 pb-20 px-20 sm:px-10 lg:px-20 items-center">
          {/* Left Content */}
          <div className="z-10 text-white w-1/2">
            <p className="flex gap-2 items-center text-xs font-semibold tracking-widest uppercase text-pink-500 mb-4">
              <GoStarFill /> WELCOME TO MY PORTFOLIO
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              I am a <br />
              <span className="text-yellow-400">Frontend Developer</span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 w-11/12">
              Architecting next-generation frontend systems with React and
              Next.js, specializing in dynamic data visualization and seamlessly
              integrating complex, AI-driven APIs for unparalleled user
              experiences.
            </p>

            <button
              onClick={contact}
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 z-10 h-96 w-96 bg-amber-200 overflow-hidden"
            style={{
              borderRadius: "70% 30% 31% 69% / 63% 75% 25% 37%",
            }}
          >
            <img
              src={mainImage.src}
              alt="Professional woman smiling and holding a tablet, representing business potential."
              className="w-[90%] max-w-md lg:max-w-lg object-cover pt-8"
              onError={handleImageError}
            />
          </div>
        </div>

        {/* Pointer Glow Animation */}
        <div
          className="absolute w-32 h-32 rounded-full bg-yellow-400 opacity-20 blur-3xl pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${cursorPos.x - 64}px, ${
              cursorPos.y - 64
            }px)`,
          }}
        ></div>
      </div>
      <div className="flex flex-col absolute right-5 top-1/3 gap-4">
        {socialIcons.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSection;
