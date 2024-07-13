import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

// Styled components for custom styles
const SkillsContainer = styled(Container)`
  padding: 60px 20px; // Padding for spacing around the container
  text-align: center; // Center-align text
  background: #5f0f40; // Add background color
  color: #ffffff; // Text color
`;

const SkillList = styled.ul`
  list-style-type: none; // Remove default list styles
  padding: 0; // Remove default padding
  margin: 0; // Remove default margin
`;

const SkillItem = styled.li`
  margin-bottom: 8px; // Space between list items
`;

const Skills = () => {
  return (
    <SkillsContainer maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" paragraph>
        Passionate web developer with expertise in front-end technologies and modern JavaScript frameworks. Proficient in creating responsive and interactive web applications with a focus on clean, efficient code and optimal user experience.
      </Typography>
      <Typography variant="body1" paragraph>
        My key skills include:
      </Typography>
      <SkillList>
        <SkillItem>Languages: HTML5, CSS3, JavaScript (ES6+)</SkillItem>
        <SkillItem>Frameworks/Libraries: React.js, jQuery, Node.js</SkillItem>
        <SkillItem>Front-end: Responsive Web Design, CSS Preprocessors (e.g., SASS)</SkillItem>
        <SkillItem>Back-end: RESTful APIs, Express.js</SkillItem>
        <SkillItem>Tools: Git, npm, Webpack, VS Code</SkillItem>
        <SkillItem>Methodologies: Agile, Object-Oriented Programming (OOP)</SkillItem>
        <SkillItem>Other: UI/UX Design Principles, Web Accessibility, Performance Optimization</SkillItem>
      </SkillList>
      <Typography variant="body1">
        Continuously learning and staying up-to-date with the latest web development trends and best practices.
      </Typography>
    </SkillsContainer>
  );
};

export default Skills;