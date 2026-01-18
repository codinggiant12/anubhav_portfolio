"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Page() {
  const searchParams = useSearchParams();
  const sections = ["home", "about", "projects", "contact"];

  // Scroll to section if URL already contains ?section=
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen  text-gray-900">
      <Navbar sections={sections} />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <main className=""></main>\
      <div
        className="absolute top-0 left-0   h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          zIndex: -10,
          backgroundImage:
            "url('https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg')",
        }}
      ></div>
    </div>
  );
}
