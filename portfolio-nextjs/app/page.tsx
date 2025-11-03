"use client";

import Image from "next/image";
import { Card, CardBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Refactored for UI/UX, NextUI, Tailwind, accessibility, and polish.
 * Features: hero section, rich typography, gradients, motion, responsive, accessible.
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#1c1c1c]">
          {/* Background Image with Next.js Image component for basePath support */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="imgs/bg.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="imgs/profiles.png"
                alt="Bradley Matera Profile"
                width={200}
                height={200}
                className="rounded-full mx-auto shadow-2xl border-4 border-[#fb8b24]"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-[#0a192f]/70 backdrop-blur-lg border border-[#fb8b24]/20">
                <CardBody className="p-8 sm:p-12">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hi, I'm{" "}
                    <span className="text-[#64ffda]">Brad Matera</span>
                  </motion.h1>

                  <motion.h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-[#fb8b24]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    I Like Building Stuff Online
                  </motion.h2>

                  <motion.p
                    className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    I'm Brad. I've done a bunch of things—like being an Army medic (2011-2014), 
                    working construction, and helping people as a case manager. Right now, I'm a 
                    student at Full Sail University studying web development (started Aug 2023, 
                    3.85 GPA). I enjoy messing around with web tools and projects, and I'm getting 
                    ready for an AWS Cloud Associate internship in Summer 2025. After that, who knows?
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <Button
                      as={Link}
                      href="/projects"
                      size="lg"
                      className="bg-[#fb8b24] hover:bg-[#e07a15] text-white font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      View My Work
                    </Button>
                    <Button
                      as={Link}
                      href="/contact"
                      size="lg"
                      variant="bordered"
                      className="border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] font-bold transition-all"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown className="text-[#fb8b24] text-2xl animate-bounce" />
          </motion.div>
        </section>

        {/* Featured Skills Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0a192f] to-[#1c1c1c]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#64ffda]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What I Work With
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "Docker",
                "Git",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1c1c1c] hover:bg-[#fb8b24]/10 transition-all duration-300 border border-[#fb8b24]/20">
                    <CardBody className="text-center py-4">
                      <p className="font-semibold text-white">{skill}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
