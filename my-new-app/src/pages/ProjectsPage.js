import React from 'react';
import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import {
  ProjectsContainer,
  ProjectCard,
  ProjectMedia,
  ProjectContent,
  ProjectLinks,
  LinkButton,
  CodePenGrid
} from '../styles/ProjectsStyledComponents';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Example SVG URLs
const ProjectSVG1 = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
const ProjectSVG2 = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';

const projects = [
  {
    title: "Interactive Pokedex",
    description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript. It integrates various Pokémon APIs to provide a comprehensive user experience.",
    image: ProjectSVG1, // Using SVG URL
    githubLink: "https://github.com/BradleyMatera/Interactive-Pokedex",
    liveLink: "https://bradleymatera.github.io/Interactive-Pokedex/",
  },
  {
    title: "Mom's Business Website",
    description: "A responsive website developed for my mom's fitness business using HTML, CSS, and JavaScript. Features include a photo gallery and contact form.",
    image: ProjectSVG2, // Using SVG URL
    githubLink: "https://github.com/BradleyMatera/Moms-website",
    liveLink: "https://bradleymatera.github.io/Moms-website/",
  },
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <Typography variant="h2" gutterBottom align="center">
        Projects
      </Typography>
      <CodePenGrid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard>
                <ProjectMedia component="div">
                  <img src={project.image} alt={`${project.title} logo`} style={{ width: '100%', height: '100%' }} />
                </ProjectMedia>
                <ProjectContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </ProjectContent>
                <ProjectLinks>
                  <LinkButton
                    variant="outlined"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    <FaGithub style={{ marginRight: '8px' }} /> Code
                  </LinkButton>
                  <LinkButton
                    variant="outlined"
                    color="secondary"
                    href={project.liveLink}
                    target="_blank"
                  >
                    <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live
                  </LinkButton>
                </ProjectLinks>
              </ProjectCard>
            </motion.div>
          </Grid>
        ))}
      </CodePenGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage;