import React, { useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/bg.jpg';
import anime from 'animejs/lib/anime.es.js';
import { SkillsContainer, BlurBackground } from '../styles/SkillsStyledComponents';

const SkillsExperienceContainer = styled(SkillsContainer)`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const SkillButton = styled.li`
  background-color: #3498db;
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9em;
  white-space: nowrap;
`;

const ExperienceItem = styled.div`
  margin: 15px 0;
`;

const SkillsExperiencePage = () => {
  useEffect(() => {
    anime({
      targets: '.animate-text',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(200),
    });
  }, []);

  return (
    <SkillsExperienceContainer maxWidth="md">
      <BlurBackground>
        <Typography variant="h2" gutterBottom className="animate-text">
          Skills & Experience
        </Typography>
        
        <Typography variant="h4" gutterBottom className="animate-text">
          Skills
        </Typography>
        <Typography variant="body1" paragraph className="animate-text">
          I’ve used the following tools in class projects at Full Sail University and personal experiments for fun, not in a professional setting. I have high expectations for how these are applied in the industry and plan to master them in future roles. This list is long, but I see it as a basic foundation for today’s web developers. Excluding the management skills, I can discuss each technical skill, expand on its use in my projects, and demonstrate it if needed.
        </Typography>
        <SkillsList>
          <SkillButton>JavaScript</SkillButton>
          <SkillButton>React (Gatsby, Native)</SkillButton>
          <SkillButton>Node.js (Express)</SkillButton>
          <SkillButton>Docker</SkillButton>
          <SkillButton>Jest</SkillButton>
          <SkillButton>PixiJS</SkillButton>
          <SkillButton>WebGPU</SkillButton>
          <SkillButton>CSS (Flexbox, Grid, Animations)</SkillButton>
          <SkillButton>Git</SkillButton>
          <SkillButton>AWS (Upcoming Summer 2025)</SkillButton>
          <SkillButton>SQL</SkillButton>
          <SkillButton>UX Design</SkillButton>
          <SkillButton>C# (Foundational)</SkillButton>
          <SkillButton>Agile/Waterfall</SkillButton>
          <SkillButton>Crisis Management</SkillButton>
          <SkillButton>Canvas</SkillButton>
          <SkillButton>Markdown</SkillButton>
          <SkillButton>Tailwind CSS</SkillButton>
        </SkillsList>

        <Typography variant="h4" gutterBottom className="animate-text" style={{ marginTop: '40px' }}>
          Experience
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">Healthcare Specialist, US Army (Jun 2011 - Apr 2014)</Typography>
              <Typography variant="body2">Medic with 2/50th 82nd PIR, provided triage, crisis care, and medical support in high-pressure environments.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> Crisis Management, Triage, Critical Thinking</Typography>
            </ExperienceItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">General Contracting, Ascend Roofing (2017 - Aug 2018)</Typography>
              <Typography variant="body2">Delivered customer service and managed construction projects.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> Customer Service, Project Management</Typography>
            </ExperienceItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">Roof Loader, Stoneway Roofing Supply (2018 - 2019)</Typography>
              <Typography variant="body2">Supported construction with a focus on safety and teamwork.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> Public Safety, Time Management</Typography>
            </ExperienceItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">Kitten Rescue, Mason County (Jun 2020 - Sep 2022)</Typography>
              <Typography variant="body2">Cared for kittens, collaborated in a high-pressure team.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> Project Management, Leadership, Compassion</Typography>
            </ExperienceItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">Case Manager, Mason County, WA (Sep 2022 - Jan 2023)</Typography>
              <Typography variant="body2">Guided clients through court, used crisis intervention and Agile/Waterfall methodologies.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> Crisis Intervention, Agile, Customer Service</Typography>
            </ExperienceItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExperienceItem className="animate-text">
              <Typography variant="h6">AWS Cloud Associate Internship (Summer 2025)</Typography>
              <Typography variant="body2">Upcoming role to gain AWS expertise.</Typography>
              <Typography variant="body2"><strong>Skills:</strong> AWS (Pending)</Typography>
            </ExperienceItem>
          </Grid>
        </Grid>
      </BlurBackground>
    </SkillsExperienceContainer>
  );
};

export default SkillsExperiencePage;