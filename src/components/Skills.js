import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Grid } from '@mui/material';

const SkillsContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const Skills = () => (
  <SkillsContainer maxWidth="md">
    <Typography variant="h2" gutterBottom>
      Skills
    </Typography>
    <Typography variant="body1" paragraph>
      Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
    </Typography>
    <Typography variant="body1" paragraph>
      My key skills include:
      <ul>
        <li>Languages: HTML5, CSS3, JavaScript, C#, Python</li>
        <li>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</li>
        <li>Tools: Git, Adobe Creative Cloud, VS Code</li>
        <li>Methodologies: Agile, Waterfall, OOP, MVC Design Patterns</li>
        <li>Other: Responsive Web Design, UX Design, SQL Databases</li>
      </ul>
    </Typography>
    <Typography variant="body1">
      For more details, please visit my LinkedIn profile.
    </Typography>
  </SkillsContainer>
);

export default Skills;
