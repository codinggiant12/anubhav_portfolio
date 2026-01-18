import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// --- Data & Types ---

interface FooterLink {
  label: string;
  href: string;
}

const portfolioLinks = {
  navigation: [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#" },
    { label: "My Skills", href: "#" },
    { label: "Contact", href: "#" },
  ],
  projects: [
    { label: "Web Design", href: "#" },
    { label: "Mobile Apps", href: "#" },
    { label: "Branding Case Studies", href: "#" },
    { label: "UX/UI Research", href: "#" },
  ],
};

const socialIcons = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/anubhav-chaurasiya-513a38299/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/codinggiant12", label: "GitHub" },

  {
    icon: FaInstagram,
    href: "https://www.instagram.com/anubhav011010/",
    label: "Instagram",
  },
];

// --- Portfolio Footer Component ---
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 ">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
      {/* Top Section: Branding, Links, and Contact */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-800 pb-10 mb-8">
        {/* Column 1: Portfolio Branding and Contact */}
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">
            Anubhav Chaurasiya
          </h2>
          <p className="text-xl font-medium text-white mb-4">
            Frontend Developer
          </p>
          <p className="text-sm text-gray-400 mb-6 max-w-xs">
            Crafting beautiful and functional digital experiences that deliver
            results.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-400">
              {/* <Mail className="w-4 h-4 mr-2 text-red-500" /> */}
              <a
                href="mailto:john.doe@portfolio.com"
                className="hover:text-white transition duration-200"
              >
                anubhavchaurasiya278@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-4 text-red-500">Quick Links</h4>
          <ul className="space-y-3">
            {portfolioLinks.navigation.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Projects/Work Links */}
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-4 text-red-500">My Work</h4>
          <ul className="space-y-3">
            {portfolioLinks.projects.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social Icons */}
        <div className="col-span-1">
          <h4 className="text-lg font-bold mb-4 text-red-500">Social</h4>
          <div className="flex flex-wrap gap-4">
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
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Anubhav Chaurasiya Portfolio. All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
