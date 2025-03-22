import React, { useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/bg.jpg';
import ProfilePic from '../assets/imgs/profiles.png';
import anime from 'animejs/lib/anime.es.js';
import '@fontsource/roboto';

const HomeAboutContainer = styled(Box)`
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

const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 800px;
`;

const AnimatedText = styled(Typography)`
  &.animate-text {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const HomeAboutPage = () => {
  useEffect(() => {
    anime({
      targets: '.animate-text',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo',
      delay: anime.stagger(300),
    });
  }, []);

  return (
    <HomeAboutContainer>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <StyledProfilePic src={ProfilePic} alt="Profile" />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <BlurBackground>
            <AnimatedText variant="h1" gutterBottom className="animate-text">
              Hi, I’m <HighlightText>Brad Matera</HighlightText>
            </AnimatedText>
            <AnimatedText variant="h2" gutterBottom className="animate-text">
              I Like Building Stuff Online
            </AnimatedText>
            <AnimatedText variant="body1" paragraph className="animate-text">
              I’m Brad. I’ve done a bunch of things—like being an Army medic (2011-2014), working construction, and helping people as a case manager. Right now, I’m a student at Full Sail University studying web development (started Aug 2023, 3.85 GPA). I enjoy messing around with web tools and projects, and I’m getting ready for an AWS Cloud Associate internship in Summer 2025. After that, who knows?
            </AnimatedText>
          </BlurBackground>
        </Grid>
      </Grid>
    </HomeAboutContainer>
  );
};

export default HomeAboutPage;