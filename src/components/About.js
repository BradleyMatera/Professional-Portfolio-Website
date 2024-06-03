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
    <Typography variant="body1" paragraph>
      Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
    </Typography>
    <Typography variant="body1" paragraph>
      Experience:
      <ul>
        <li>Student at Full Sail University, focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</li>
        <li>Self-employed web developer, showcasing projects on YouTube and providing IT consulting.</li>
        <li>Case Manager at Mason County, assisting clients with court-mandated activities.</li>
        <li>Kitten Rescue Volunteer, supporting the wellbeing of kittens.</li>
        <li>Roof Loader and General Contractor, emphasizing safety and teamwork.</li>
        <li>Healthcare Specialist in the US Army, providing critical healthcare services.</li>
      </ul>
    </Typography>
    <Typography variant="body1" paragraph>
      Skills:
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
  </AboutContainer>
);

export default About;
