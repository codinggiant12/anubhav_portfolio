"use client";
import { useRouter } from "next/navigation";

interface NavbarProps {
  sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
  const router = useRouter();

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      router.push(`/?section=${section}`, { scroll: false });
    }
  };

  return (
    <nav className="absolute w-full flex justify-around gap-8 py-4   text-amber-300  top-0 z-68 overflow-hidden ">
      <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg tracking-wide">
        &lt;<span className="text-amber-300">Anubhav</span>{" "}
        <span className="text-white">Chaurasiya</span> /&gt;
      </h1>
      <div className="flex gap-10">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className="uppercase tracking-wide hover:text-yellow-300 transition-all duration-200 font-semibold"
          >
            {section}
          </button>
        ))}
      </div>

      <div>
        <button>Download Resume</button>
      </div>
    </nav>
  );
}
