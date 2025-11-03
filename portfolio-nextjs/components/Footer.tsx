"use client";

import { Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaYoutube, FaCodepen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BradleyMatera",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@bradmatera",
      icon: <FaYoutube size={24} />,
    },
    {
      name: "CodePen",
      url: "https://codepen.io/student-account-bradley-matera",
      icon: <FaCodepen size={24} />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0a192f] to-[#1c1c1c] text-white py-12 px-6 border-t border-[#fb8b24]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              Army veteran and web developer passionate about creating responsive, 
              accessible web applications. Currently a student at Full Sail University, 
              preparing for an AWS internship in Summer 2025.
            </p>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#fb8b24] transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-300">
              Email:{" "}
              <Link
                href="mailto:bradmatera@gmail.com"
                className="text-[#64ffda] hover:text-[#fb8b24] transition-colors"
              >
                bradmatera@gmail.com
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bradley Matera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
