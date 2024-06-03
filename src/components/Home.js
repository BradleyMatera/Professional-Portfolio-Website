import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import ProjectCard from './ProjectCard';

// Styled Components
const HomeContainer = styled(Container)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  font-size: 16px;
  padding: 20px;
`;

const HeroSection = styled(animated(Box))`
  background: url('https://source.unsplash.com/1600x900/?tech') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
  min-height: 500px;
  margin-bottom: 20px;
`;

const HeroText = styled.div`
  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 300;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    text-align: center;
  }
`;

const Section = styled(Box)`
  padding: 60px 20px;
  margin-bottom: 20px;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
`;

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2em;
  color: #007bff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const SkillsList = styled(Grid)`
  margin-top: 20px;
`;

const SkillItem = styled(Box)`
  margin: 20px 0;
`;

const ContactSection = styled(Box)`
  padding: 60px 20px;
  background: #007bff;
  color: white;
  text-align: center;
`;

const ContactButton = styled(Button)`
  margin-top: 20px;
`;

const Home = () => {
  const heroProps = useSpring({
    backgroundPosition: 'center',
    from: { backgroundPosition: '100%' },
    config: { duration: 3000 },
    loop: { reverse: true }
  });

  return (
    <HomeContainer maxWidth="lg">
      <HeroSection style={heroProps}>
        <HeroText>
          <Typography variant="h1">Brad Matera</Typography>
          <Typography variant="subtitle1">Showcasing My React.js Projects and Portfolio</Typography>
        </HeroText>
      </HeroSection>

      <Section>
        <SectionTitle variant="h2">Skills</SectionTitle>
        <SkillsList container spacing={3}>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">React.js</Typography>
          </SkillItem>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">JavaScript</Typography>
          </SkillItem>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">HTML5 & CSS3</Typography>
          </SkillItem>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">UX Design</Typography>
          </SkillItem>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">Git & GitHub</Typography>
          </SkillItem>
          <SkillItem item xs={12} sm={6} md={4}>
            <Typography variant="h6">Agile Methodologies</Typography>
          </SkillItem>
        </SkillsList>
      </Section>

      <Section>
        <SectionTitle variant="h2">Projects</SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Project Management App"
              description="A task management application utilizing React.js and Firebase."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Portfolio Website"
              description="A responsive personal website using HTML5, CSS3, and JavaScript."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Travel Site"
              description="A comprehensive travel site showcasing various destinations."
            />
          </Grid>
        </Grid>
      </Section>

      <ContactSection>
        <Typography variant="h2">Get In Touch</Typography>
        <Typography variant="subtitle1">Interested in collaborating or learning more?</Typography>
        <ContactButton variant="contained" color="secondary">Contact Me</ContactButton>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;
