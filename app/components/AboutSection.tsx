"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuFileCode2 } from "react-icons/lu";
import { FaLightbulb, FaJava, FaCss3, FaReact } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";

// ---- Data ----
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: IoExtensionPuzzleOutline,
    title: "UI/UX Design",
    description:
      "Designing intuitive, engaging, and modern user experiences with precision and detail.",
    color: "text-orange-500",
  },
  {
    icon: LuFileCode2,
    title: "Frontend Development",
    description:
      "Building scalable, maintainable apps using React, Next.js, and clean component-based architecture.",
    color: "text-blue-500",
  },
  {
    icon: FaLightbulb,
    title: "Creative Branding",
    description:
      "Blending aesthetics with strategy to create memorable and effective brand identities.",
    color: "text-yellow-500",
  },
];

const skills: Service[] = [
  {
    icon: RiJavascriptLine,
    title: "JavaScript",
    description:
      "Expertise in ES6+, DOM manipulation, async handling, and API integration.",
    color: "text-yellow-500",
  },
  {
    icon: FaJava,
    title: "Java DSA",
    description:
      "Strong foundation in algorithms, problem-solving, and backend concepts.",
    color: "text-red-500",
  },
  {
    icon: FaCss3,
    title: "Bootstrap & Tailwind CSS",
    description:
      "Fast UI prototyping and production-grade styling using modern CSS frameworks.",
    color: "text-blue-500",
  },
  {
    icon: FaReact,
    title: "React & Next.js",
    description:
      "Building powerful, fast, and interactive web applications with reusable components.",
    color: "text-cyan-500",
  },
];

// ---- Card ----
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col justify-between h-full"
    >
      <div
        className={`text-4xl w-14 h-14 mb-5 flex items-center justify-center rounded-xl shadow-inner ${service.color}`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

// ---- Section Animation Wrapper ----
const AnimatedSection: React.FC<{
  title: string;
  subtitle: string;
  items: Service[];
  direction: "left" | "right";
}> = ({ title, subtitle, items, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: direction === "left" ? -200 : 200,
        transition: { duration: 0.8 },
      });
    }
  }, [isInView, controls, direction]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: direction === "left" ? -200 : 200 }}
      className="max-w-7xl mx-auto py-20 px-6 sm:px-10 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-12"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{title}</h2>
        <p className="text-base text-gray-500">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              delay: i * 0.15,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <ServiceCard service={item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// ---- Main Component ----
const AboutSection: React.FC = () => {
  return (
    <div className="font-sans bg-transparent  min-h-screen text-white overflow-hidden">
      <AnimatedSection
        title="What I Offer"
        subtitle="Delivering powerful digital experiences through design and technology."
        items={services}
        direction="right"
      />

      <AnimatedSection
        title="My Skills"
        subtitle="Technologies I master to transform ideas into real products."
        items={skills}
        direction="left"
      />
    </div>
  );
};

export default AboutSection;
