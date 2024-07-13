import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box } from '@mui/material';

const AboutContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #0f4c5c;
  color: #ffffff;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ExperienceItem = styled.li`
  margin-bottom: 16px;
`;

const About = () => {
  return (
    <AboutContainer maxWidth="md">
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I'm a passionate web developer with a focus on creating responsive and interactive web applications. Currently pursuing a Bachelor's degree in Web Development at Full Sail University, I'm dedicated to honing my skills in front-end technologies and modern JavaScript frameworks.
      </Typography>
      <Box marginBottom={4}>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <ExperienceList>
          <ExperienceItem>
            <Typography variant="h6">Student at Full Sail University</Typography>
            <Typography variant="body2">Focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</Typography>
          </ExperienceItem>
          <ExperienceItem>
            <Typography variant="h6">Self-employed Web Developer</Typography>
            <Typography variant="body2">Showcasing projects on YouTube and providing IT consulting.</Typography>
          </ExperienceItem>
          <ExperienceItem>
            <Typography variant="h6">Case Manager at Mason County</Typography>
            <Typography variant="body2">Assisted clients with court-mandated activities, developing strong communication and organizational skills.</Typography>
          </ExperienceItem>
          <ExperienceItem>
            <Typography variant="h6">Healthcare Specialist in the US Army</Typography>
            <Typography variant="body2">Provided critical healthcare services, demonstrating attention to detail and ability to work under pressure.</Typography>
          </ExperienceItem>
        </ExperienceList>
      </Box>
    </AboutContainer>
  );
};

export default About;