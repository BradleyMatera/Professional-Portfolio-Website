import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

// Styled components for custom styles
const ExperienceContainer = styled(Container)`
  padding: 60px 20px; // Padding for spacing around the container
  text-align: center; // Center-align text
  background: #9a031e; // Add background color
  color: #ffffff; // Text color
`;

const ExperienceList = styled.ul`
  list-style-type: none; // Remove default list styles
  padding: 0; // Remove default padding
  margin: 0; // Remove default margin
`;

const ExperienceItem = styled.li`
  margin-bottom: 8px; // Space between list items
`;

const Experience = () => {
  return (
    <ExperienceContainer maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
      <Typography variant="body1" paragraph>
        Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
      </Typography>
      <Typography variant="body1" paragraph>
        My professional experience includes:
      </Typography>
      <ExperienceList>
        <ExperienceItem>Student at Full Sail University: Engaged in rigorous coursework focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</ExperienceItem>
        <ExperienceItem>Web Developer (Self-Employed): Developed and showcased personal projects on YouTube channel, contributing to web development education.</ExperienceItem>
        <ExperienceItem>Case Manager at Mason County, WA: Assisted clients with court-mandated activities while employing Agile methodologies.</ExperienceItem>
        <ExperienceItem>Kitten Rescue Volunteer: Supported the wellbeing and care of kittens in a compassionate environment.</ExperienceItem>
        <ExperienceItem>Roof Loader at Stoneway Roofing Supply: Supported construction projects, emphasizing safety, teamwork, and efficient time management.</ExperienceItem>
        <ExperienceItem>Healthcare Specialist in the US Army: Provided critical healthcare services including triage, physical examinations, and crisis management.</ExperienceItem>
      </ExperienceList>
      <Typography variant="body1">
        For more details, please visit my LinkedIn profile.
      </Typography>
    </ExperienceContainer>
  );
};

export default Experience;