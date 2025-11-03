"use client";

import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodepen } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "WebGPU Shapes Renderer",
    description: "Demo of a WebGPU-based renderer displaying selectable 2D shapes (triangle, square, pentagon, diamond, hexagon) on a canvas, forked and enhanced from an original project. (only works on Chrome)",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/leaf-js",
    liveLink: "https://bradleymatera.github.io/leaf-js/",
    tags: ["WebGPU", "JavaScript", "Graphics"],
  },
  {
    title: "Gatsby Starter Minimal Blog",
    description: "React-based blog fetching data from an Express API, deployed on Netlify.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/gatsby-starter-minimal-blog",
    liveLink: "https://bradleysgatsbyblog.netlify.app/",
    tags: ["Gatsby", "React", "Express"],
  },
  {
    title: "Interactive Pokedex",
    description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript, integrating Pokémon APIs.",
    image: "imgs/Pokedex.png",
    githubLink: "https://github.com/BradleyMatera/Interactive-Pokedex",
    liveLink: "https://bradleymatera.github.io/Interactive-Pokedex/",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Mom's Business Website",
    description: "A responsive website for my mom's fitness business using HTML, CSS, and JavaScript, with a photo gallery and contact form.",
    image: "imgs/RoxysFittness.png",
    githubLink: "https://github.com/BradleyMatera/Moms-website",
    liveLink: "https://bradleymatera.github.io/Moms-website/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "React Native Anime CRUD App",
    description: "Mobile CRUD app with React Native, Node.js, MongoDB, deployed on Heroku.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera",
    liveLink: "https://cruddemo-one.vercel.app/",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Docker Multilang Project",
    description: "Dockerized multi-language app (Python/Node.js) for server tooling.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/docker_multilang_project",
    tags: ["Docker", "Python", "Node.js"],
  },
  {
    title: "RESTful Routes Using ExpressJS",
    description: "RESTful API built with Express.js.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/RESTfulRoutesUsingExpressJS",
    tags: ["Express.js", "Node.js", "REST API"],
  },
  {
    title: "Pong Deluxe",
    description: "Pong game using PixiJS for real-time graphics.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/Pong-Deluxe",
    liveLink: "https://pongdeluxe.netlify.app/",
    tags: ["PixiJS", "JavaScript", "Game Dev"],
  },
  {
    title: "CheeseMath Jest Tests",
    description: "Math utilities with Jest unit tests.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/CheeseMath-Jest-Tests/tree/main/CheeseMath",
    liveLink: "https://cheese-math.vercel.app/",
    tags: ["Jest", "Testing", "JavaScript"],
  },
  {
    title: "Animal Sounds",
    description: "Interactive animal sounds application.",
    image: "imgs/placeholder.svg",
    githubLink: "https://github.com/BradleyMatera/AnimalSounds",
    liveLink: "https://bradleymatera.github.io/AnimalSounds/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const codePens = [
  { title: "JavaScript Garbage Collection Tutorial", link: "https://codepen.io/student-account-bradley-matera/pen/ZYzoWpL" },
  { title: "React Calculator", link: "https://codepen.io/student-account-bradley-matera/pen/ogvGZjJ" },
  { title: "Sound Machine", link: "https://codepen.io/student-account-bradley-matera/details/dPbVvoa" },
  { title: "Markdown Previewer", link: "https://codepen.io/student-account-bradley-matera/pen/ZYzXeEJ" },
  { title: "Random Quote Machine", link: "https://codepen.io/student-account-bradley-matera/pen/azoLpeG" },
  { title: "Random Quote Generator", link: "https://codepen.io/student-account-bradley-matera/pen/PwYJWMY" },
  { title: "Data Visualization", link: "https://codepen.io/student-account-bradley-matera/details/dyEYbPO" },
];

export default function ProjectsPage() {
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
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my web development projects showcasing various technologies and skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1c1c1c] border border-[#fb8b24]/20 hover:border-[#fb8b24] transition-all duration-300 h-full">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                  <CardBody className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          variant="flat"
                          className="bg-[#fb8b24]/20 text-[#fb8b24]"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter className="gap-2">
                    <Button
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="bordered"
                      color="warning"
                      startContent={<FaGithub />}
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                    {project.liveLink && (
                      <Button
                        as="a"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        color="success"
                        startContent={<FaExternalLinkAlt />}
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CodePen Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#64ffda]">
              CodePen Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codePens.map((pen, index) => (
              <motion.div
                key={pen.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1c1c1c] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300">
                  <CardBody>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {pen.title}
                    </h3>
                    <Button
                      as="a"
                      href={pen.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="bordered"
                      color="success"
                      startContent={<FaCodepen />}
                      className="w-full"
                    >
                      View on CodePen
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
