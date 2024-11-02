import React from 'react';
import { Typography, Grid, Chip, Avatar, Box } from '@mui/material';
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
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const projects = [
  {
    title: "Interactive Pokedex",
    description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript. It integrates various Pokémon APIs to provide a comprehensive user experience.",
    techStack: [FaHtml5, SiTailwindcss, FaJsSquare, FaReact, FaGitAlt], // Added FaGitAlt here
    githubLink: "https://github.com/BradleyMatera/Interactive-Pokedex",
    liveLink: "https://bradleymatera.github.io/Interactive-Pokedex/",
  },
  {
    title: "Mom's Business Website",
    description: "A responsive website developed for my mom's fitness business using HTML, CSS, JavaScript, and Node.js, with MongoDB for data storage.",
    techStack: [FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, SiMongodb], // Added SiMongodb here
    githubLink: "https://github.com/BradleyMatera/Moms-website",
    liveLink: "https://bradleymatera.github.io/Moms-website/",
  },
];

const CardAnimation = {
  hover: { scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)' },
  tap: { scale: 0.95 },
};

const ButtonAnimation = {
  whileHover: { scale: 1.1, transition: { duration: 0.2 } },
  whileTap: { scale: 0.9 },
};

const ProjectsPage = () => {
  return (
    <ProjectsContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom align="center">
          My Projects
        </Typography>
      </motion.div>

      <CodePenGrid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover="hover"
              whileTap="tap"
              variants={CardAnimation}
            >
              <ProjectCard>
                <ProjectMedia>
                  {project.techStack.map((Icon, i) => (
                    <Icon key={i} size="3em" color="#64ffda" style={{ margin: '0 8px' }} />
                  ))}
                </ProjectMedia>
                <ProjectContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Box mt={2}>
                    {project.techStack.map((Icon, i) => (
                      <Chip
                        key={i}
                        icon={<Avatar sx={{ bgcolor: '#0a192f', color: '#64ffda' }}><Icon /></Avatar>}
                        label={Icon.name.replace(/Fa|Si/, '')}
                        variant="outlined"
                        sx={{ margin: '4px', color: '#64ffda', borderColor: '#64ffda' }}
                      />
                    ))}
                  </Box>
                </ProjectContent>
                <ProjectLinks>
                  <LinkButton
                    component={motion.a}
                    href={project.githubLink}
                    target="_blank"
                    color="primary"
                    variants={ButtonAnimation}
                  >
                    <FaGithub style={{ marginRight: '8px' }} /> Code
                  </LinkButton>
                  <LinkButton
                    component={motion.a}
                    href={project.liveLink}
                    target="_blank"
                    color="secondary"
                    variants={ButtonAnimation}
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