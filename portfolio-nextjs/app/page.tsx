"use client";

import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center px-4 py-20"
          style={{
            backgroundImage: "url('/imgs/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/imgs/profiles.png"
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
                    className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
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
                </CardBody>
              </Card>
            </motion.div>
          </div>
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
