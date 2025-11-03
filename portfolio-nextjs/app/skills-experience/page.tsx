"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const skills = [
  "JavaScript",
  "React (Gatsby, Native)",
  "Node.js (Express)",
  "Docker",
  "Jest",
  "PixiJS",
  "WebGPU",
  "CSS (Flexbox, Grid, Animations)",
  "Git",
  "AWS (Upcoming Summer 2025)",
  "SQL",
  "UX Design",
  "C# (Foundational)",
  "Agile/Waterfall",
  "Crisis Management",
  "Canvas",
  "Markdown",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
];

const experiences = [
  {
    title: "Healthcare Specialist, US Army",
    period: "Jun 2011 - Apr 2014",
    description: "Medic with 2/50th 82nd PIR, provided triage, crisis care, and medical support in high-pressure environments.",
    skills: ["Crisis Management", "Triage", "Critical Thinking"],
  },
  {
    title: "General Contracting, Ascend Roofing",
    period: "2017 - Aug 2018",
    description: "Delivered customer service and managed construction projects.",
    skills: ["Customer Service", "Project Management"],
  },
  {
    title: "Roof Loader, Stoneway Roofing Supply",
    period: "2018 - 2019",
    description: "Supported construction with a focus on safety and teamwork.",
    skills: ["Public Safety", "Time Management"],
  },
  {
    title: "Kitten Rescue, Mason County",
    period: "Jun 2020 - Sep 2022",
    description: "Cared for kittens, collaborated in a high-pressure team.",
    skills: ["Project Management", "Leadership", "Compassion"],
  },
  {
    title: "Case Manager, Mason County, WA",
    period: "Sep 2022 - Jan 2023",
    description: "Guided clients through court, used crisis intervention and Agile/Waterfall methodologies.",
    skills: ["Crisis Intervention", "Agile", "Customer Service"],
  },
  {
    title: "AWS Cloud Associate Internship",
    period: "Summer 2025",
    description: "Upcoming role to gain AWS expertise.",
    skills: ["AWS (Pending)"],
  },
];

export default function SkillsExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-[#0a192f] to-[#1c1c1c] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#64ffda] mb-4">
              Skills & Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and professional experience
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaCode className="text-3xl text-[#fb8b24]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda]">
                Technical Skills
              </h2>
            </div>
            
            <Card className="bg-[#1c1c1c] border border-[#fb8b24]/20">
              <CardBody className="p-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I've used the following tools in class projects at Full Sail University and 
                  personal experiments for fun, not in a professional setting. I have high 
                  expectations for how these are applied in the industry and plan to master them 
                  in future roles. This list is long, but I see it as a basic foundation for 
                  today's web developers. Excluding the management skills, I can discuss each 
                  technical skill, expand on its use in my projects, and demonstrate it if needed.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        size="lg"
                        variant="flat"
                        className="bg-[#fb8b24] text-white font-medium hover:bg-[#64ffda] hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </Chip>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-3xl text-[#fb8b24]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#64ffda]">
                Professional Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#1c1c1c] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300 h-full">
                    <CardBody className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-[#fb8b24] font-medium mb-4">
                        {exp.period}
                      </p>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Chip
                            key={skill}
                            size="sm"
                            variant="bordered"
                            className="border-[#64ffda] text-[#64ffda]"
                          >
                            {skill}
                          </Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#64ffda]">
              Education
            </h2>
            <Card className="bg-[#1c1c1c] border border-[#fb8b24]/20 max-w-3xl mx-auto">
              <CardBody className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Full Sail University
                </h3>
                <p className="text-[#fb8b24] font-medium mb-4">
                  Web Development Program | Aug 2023 - Present
                </p>
                <p className="text-gray-300 text-lg">
                  Current GPA: <span className="text-[#64ffda] font-bold">3.85</span>
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
