import React from 'react';
import { Typography, Grid } from '@mui/material';
import { FaGithub, FaExternalLinkAlt, FaCodepen } from 'react-icons/fa';
import pokedexImage from '../assets/imgs/Pokedex.png';
import roxysFittnessImage from '../assets/imgs/RoxysFittness.png';
import { ProjectsContainer, ProjectCard, ProjectMedia, ProjectContent, ProjectLinks, LinkButton, CodePenGrid } from '../styles/ProjectsStyledComponents';

const ProjectsPage = () => {
  const projects = [
    {
      title: "WebGPU Shapes Renderer",
      description: "Demo of a WebGPU-based renderer displaying selectable 2D shapes (triangle, square, pentagon, diamond, hexagon) on a canvas, forked and enhanced from an original project.(only workds on chrome)",
      image: "https://via.placeholder.com/400x225?text=WebGPU+Shapes",
      githubLink: "https://github.com/BradleyMatera/leaf-js",
      liveLink: "https://bradleymatera.github.io/leaf-js/",
    },
    {
      title: "Gatsby Starter Minimal Blog",
      description: "React-based blog fetching data from an Express API, deployed on Netlify.",
      image: "https://via.placeholder.com/400x225?text=Gatsby+Blog",
      githubLink: "https://github.com/BradleyMatera/gatsby-starter-minimal-blog",
      liveLink: "https://bradleysgatsbyblog.netlify.app/",
    },
    {
      title: "Interactive Pokedex",
      description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript, integrating Pokémon APIs.",
      image: pokedexImage,
      githubLink: "https://github.com/BradleyMatera/Interactive-Pokedex",
      liveLink: "https://bradleymatera.github.io/Interactive-Pokedex/",
    },
    {
      title: "Mom's Business Website",
      description: "A responsive website for my mom’s fitness business using HTML, CSS, and JavaScript, with a photo gallery and contact form.",
      image: roxysFittnessImage,
      githubLink: "https://github.com/BradleyMatera/Moms-website",
      liveLink: "https://bradleymatera.github.io/Moms-website/",
    },
    {
      title: "React Native Anime CRUD App",
      description: "Mobile CRUD app with React Native, Node.js, MongoDB, deployed on Heroku.",
      image: "https://via.placeholder.com/400x225?text=Anime+CRUD",
      githubLink: "https://github.com/BradleyMatera", // Assuming no specific repo; update if available
      liveLink: "https://cruddemo-one.vercel.app/",
    },
    {
      title: "Docker Multilang Project",
      description: "Dockerized multi-language app (Python/Node.js) for server tooling.",
      image: "https://via.placeholder.com/400x225?text=Docker+Multilang",
      githubLink: "https://github.com/BradleyMatera/docker_multilang_project",
    },
    {
      title: "RESTful Routes Using ExpressJS",
      description: "RESTful API built with Express.js.",
      image: "https://via.placeholder.com/400x225?text=RESTful+API",
      githubLink: "https://github.com/BradleyMatera/RESTfulRoutesUsingExpressJS",
    },
    {
      title: "Pong_Deluxe",
      description: "Pong game using PixiJS for real-time graphics.",
      image: "https://via.placeholder.com/400x225?text=PixiJS+Pong",
      githubLink: "https://github.com/BradleyMatera/Pong-Deluxe",
      liveLink: "https://pongdeluxe.netlify.app/",
    },
    {
      title: "CheeseMath Jest Tests",
      description: "Math utilities with Jest unit tests.",
      image: "https://via.placeholder.com/400x225?text=CheeseMath",
      githubLink: "https://github.com/BradleyMatera/CheeseMath-Jest-Tests/tree/main/CheeseMath",
      liveLink: "https://cheese-math.vercel.app/",
    },
      title: "Animal Sounds",
      description: "Animal Sounds",
      image: "https://via.placeholder.com/400x225?text=AnimalSounds",
      githubLink: "https://github.com/BradleyMatera/AnimalSounds",
      liveLink: "https://bradleymatera.github.io/AnimalSounds/",
    {

      
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

export default ProjectsPage;
