import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Container, Typography, Box, List, ListItem, Button } from '@mui/material';

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
  border-bottom: 1px solid #eee;
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

const ProjectList = styled(List)`
  margin: 20px 0;
  list-style: none;
  text-align: center;
`;

const ProjectItem = styled(ListItem)`
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
  margin-bottom: 10px;
  display: block;
  text-align: center;
  font-size: 1.2em;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;

  p {
    margin: 5px 0 15px 0;
    font-size: 1em;
    font-weight: 300;
    color: #666;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Oswald', sans-serif;
  }
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
          <Typography variant="h1">Welcome to My Tech Blog</Typography>
          <Typography variant="subtitle1">Exploring the Latest in Technology</Typography>
        </HeroText>
      </HeroSection>
      <Section>
        <SectionTitle variant="h2">About</SectionTitle>
        <Typography>This is the about section.</Typography>
      </Section>
      <Section>
        <SectionTitle variant="h2">Projects</SectionTitle>
        <ProjectList>
          <ProjectItem>
            <Button variant="contained" color="primary">Project 1</Button>
            <Typography>Details about Project 1</Typography>
          </ProjectItem>
          <ProjectItem>
            <Button variant="contained" color="primary">Project 2</Button>
            <Typography>Details about Project 2</Typography>
          </ProjectItem>
        </ProjectList>
      </Section>
    </HomeContainer>
  );
};

export default Home;
