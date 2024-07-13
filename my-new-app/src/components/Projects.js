import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Card, CardContent } from '@mui/material';

const ProjectsContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #fb8b24;
  color: #ffffff;
`;

const ProjectCard = styled(Card)`
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Projects = () => {
  return (
    <ProjectsContainer maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" paragraph>
        Here are some of my key projects that showcase my skills in web development:
      </Typography>
      <ProjectCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Mom's Site
          </Typography>
          <Typography variant="body2">
            A responsive website built for my mom's business using HTML, CSS, and JavaScript. Features include a photo gallery, contact form, and service descriptions.
          </Typography>
        </CardContent>
      </ProjectCard>
      <ProjectCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            React Professional Portfolio
          </Typography>
          <Typography variant="body2">
            A dynamic portfolio website built with React.js, showcasing my projects and skills. Utilizes modern web development practices and responsive design.
          </Typography>
        </CardContent>
      </ProjectCard>
      <ProjectCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Interactive Pokedex
          </Typography>
          <Typography variant="body2">
            An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript. Integrates various Pokémon APIs for a comprehensive user experience.
          </Typography>
        </CardContent>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;