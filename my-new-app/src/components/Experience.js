import React from 'react';
import { Typography } from '@mui/material';
import { ExperienceContainer, ExperienceList, ExperienceItem } from '../styles/ExperienceStyledComponents';

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