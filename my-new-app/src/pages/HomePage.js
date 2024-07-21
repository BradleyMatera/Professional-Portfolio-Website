import React, { useEffect } from 'react';
import { Typography, Box, Button, Grid, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/backroundimage.png';
import ProjectPic from '../assets/imgs/projects.png';
import ProfilePic from '../assets/imgs/profiles.png';
import '@fontsource/roboto';
import anime from 'animejs/lib/anime.es.js';
import { FaGithub, FaLinkedin, FaTwitter, FaReact } from 'react-icons/fa';

const HomePageContainer = styled(Box)`
  background-color: #0a192f;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

const HighlightText = styled.span`
  color: #64ffda;
`;

const StyledProfilePic = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledProjectPic = styled.img`
  width: 200px;
  height: 150px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const AnimatedText = styled(Typography)`
  &.animate-text {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const HomePage = () => {
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
    <HomePageContainer>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <StyledProfilePic src={ProfilePic} alt="Profile" />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <BlurBackground>
            <AnimatedText variant="h1" gutterBottom className="animate-text">
              Hi, my name is <HighlightText>Bradley Matera</HighlightText>.
            </AnimatedText>
            <AnimatedText variant="h2" gutterBottom className="animate-text">
              I build things for the web.
            </AnimatedText>
            <AnimatedText variant="body1" paragraph className="animate-text">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </AnimatedText>
            <StyledProjectPic src={ProjectPic} alt="Project" />
            <Button variant="outlined" color="primary" href="#contact" className="animate-text">
              Contact Me
            </Button>
          </BlurBackground>
        </Grid>
        <Grid item xs={12}>
          <SocialIcons>
            <IconButton href="https://github.com/BradleyMatera" target="_blank">
              <FaGithub size="2em" color="#64ffda" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/bradley-matera" target="_blank">
              <FaLinkedin size="2em" color="#64ffda" />
            </IconButton>
            <IconButton href="https://twitter.com/BradleyMatera" target="_blank">
              <FaTwitter size="2em" color="#64ffda" />
            </IconButton>
          </SocialIcons>
        </Grid>
        <Grid item xs={12}>
          <FaReact size="5em" color="#61dafb" style={{ marginTop: '20px' }} />
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default HomePage;