import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, Grid } from '@mui/material';

const ExperienceContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const Experience = () => (
  <ExperienceContainer maxWidth="md">
    <Typography variant="h2" gutterBottom>
      Experience
    </Typography>
    <Typography variant="body1" paragraph>
      Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
    </Typography>
    <Typography variant="body1" paragraph>
      My professional experience includes:
      <ul>
        <li>Student at Full Sail University: Engaged in rigorous coursework focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</li>
        <li>Web Developer (Self-Employed): Developed and showcased personal projects on YouTube channel, contributing to web development education.</li>
        <li>Case Manager at Mason County, WA: Assisted clients with court-mandated activities while employing Agile methodologies.</li>
        <li>Kitten Rescue Volunteer: Supported the wellbeing and care of kittens in a compassionate environment.</li>
        <li>Roof Loader at Stoneway Roofing Supply: Supported construction projects, emphasizing safety, teamwork, and efficient time management.</li>
        <li>Healthcare Specialist in the US Army: Provided critical healthcare services including triage, physical examinations, and crisis management.</li>
      </ul>
    </Typography>
    <Typography variant="body1">
      For more details, please visit my LinkedIn profile.
    </Typography>
  </ExperienceContainer>
);

export default Experience;
