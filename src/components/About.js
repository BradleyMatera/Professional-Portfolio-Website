import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box } from '@mui/material';

const AboutContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const About = () => (
  <AboutContainer maxWidth="md">
    <Typography variant="h2" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1">
         <p>
          Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design,
          currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies
          and responsive design principles. Seeking a remote internship in web/software development
          to leverage my technical acumen and passion for innovation.
        </p>
        <p>
          <strong>Skills:</strong>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript, C#, Python</li>
            <li>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</li>
            <li>Tools: Git, Adobe Creative Cloud, VS Code</li>
            <li>Methodologies: Agile, Waterfall, OOP, MVC Design Patterns</li>
            <li>Other: Responsive Web Design, UX Design, SQL Databases</li>
          </ul>
        </p>
   </Typography>
  </AboutContainer>
);

export default About;
