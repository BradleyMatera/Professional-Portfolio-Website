import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Grid } from '@mui/material';

const ProjectsContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const Projects = () => (
  <ProjectsContainer maxWidth="md">
    <Typography variant="h2" gutterBottom>
      Projects
    </Typography>
    <Typography variant="body1" paragraph>
      Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
    </Typography>
    <Typography variant="body1" paragraph>
      Here are some of my key projects:
      <ul>
        <li>Project Management App: A task management application utilizing React.js and Firebase.</li>
        <li>Portfolio Website: A responsive personal website using HTML5, CSS3, and JavaScript.</li>
        <li>Travel Site: A comprehensive travel site showcasing various destinations.</li>
      </ul>
    </Typography>
    <Typography variant="body1">
      For more details, please visit my LinkedIn profile.
    </Typography>
  </ProjectsContainer>
);

export default Projects;
