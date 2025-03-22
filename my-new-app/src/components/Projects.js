import React from 'react';
import { Typography, Grid } from '@mui/material';
import { FaGithub, FaExternalLinkAlt, FaCodepen } from 'react-icons/fa';
import pokedexImage from '../assets/imgs/Pokedex.png';
import roxysFittnessImage from '../assets/imgs/RoxysFittness.png';
import { ProjectsContainer, ProjectCard, ProjectMedia, ProjectContent, ProjectLinks, LinkButton, CodePenGrid } from '../styles/ProjectsStyledComponents';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Pokedex",
      description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript. It integrates various Pokémon APIs to provide a comprehensive user experience.",
      image: pokedexImage,
      githubLink: "https://github.com/BradleyMatera/Interactive-Pokedex",
      liveLink: "https://bradleymatera.github.io/Interactive-Pokedex/",
    },
    {
      title: "Mom's Business Website",
      description: "A responsive website developed for my mom's fitness business using HTML, CSS, and JavaScript. Features include a photo gallery and contact form.",
      image: roxysFittnessImage,
      githubLink: "https://github.com/BradleyMatera/Moms-website",
      liveLink: "https://bradleymatera.github.io/Moms-website/",
    },
    {
      title: "Dev2501 Project",
      description: "A project developed as part of the Dev2501 course, showcasing various web development skills and techniques.",
      image: "https://via.placeholder.com/400x225?text=Dev2501+Project",
      githubLink: "https://github.com/BradleyMatera/Matera_Bradley_Dev2501",
      liveLink: "https://bradleymatera.github.io/Matera_Bradley_Dev2501",
    },
    {
      title: "Travel Site",
      description: "Ready Set Travel Pages showcasing my work",
      image: "https://via.placeholder.com/400x225?text=Ready+Set+Travel+Pages",
      githubLink: "https://github.com/BradleyMatera/ReadySetTravelPages/",
      liveLink: "https://bradleymatera.github.io/ReadySetTravelPages/",
    }
  ];

  const codePens = [
    { title: "Arrays and Classes Exercise", link: "https://codepen.io/student-account-bradley-matera/pen/GRaZGPE" },
    { title: "Data Visualization", link: "https://codepen.io/student-account-bradley-matera/pen/dyEYbPO" },
    { title: "Loop Exercise", link: "https://codepen.io/student-account-bradley-matera/pen/VwOLJEN" },
    { title: "Resume" , link: "https://codepen.io/student-account-bradley-matera/full/vEYrOGB"},];

  return (
    <ProjectsContainer maxWidth="lg" id="projects">
      <Typography variant="h2" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectMedia
                image={project.image}
                title={project.title}
              />
              <ProjectContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </ProjectContent>
              <ProjectLinks>
                <LinkButton startIcon={<FaGithub />} href={project.githubLink} target="_blank" rel="noopener noreferrer" variant="outlined">
                  GitHub
                </LinkButton>
                {project.liveLink && (
                  <LinkButton startIcon={<FaExternalLinkAlt />} href={project.liveLink} target="_blank" rel="noopener noreferrer" variant="outlined">
                    Live Demo
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
      
      <CodePenGrid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center">
            CodePen Projects
          </Typography>
        </Grid>
        {codePens.map((pen, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pen.title}
                </Typography>
              </ProjectContent>
              <ProjectLinks>
                <LinkButton startIcon={<FaCodepen />} href={pen.link} target="_blank" rel="noopener noreferrer" variant="outlined">
                  View on CodePen
                </LinkButton>
              </ProjectLinks>
            </ProjectCard>
          </Grid>
        ))}
      </CodePenGrid>
    </ProjectsContainer>
  );
};

export default Projects;