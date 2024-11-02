import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Modal, Backdrop, Fade } from '@mui/material';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/bg.jpg';
import ProfilePic from '../assets/imgs/profiles.png';
import '@fontsource/roboto';
import anime from 'animejs/lib/anime.es.js';
import { FaReact } from 'react-icons/fa';

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

const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const AnimatedText = styled(Typography)`
  &.animate-text {
    opacity: 0;
    transform: translateY(50px);
  }

  &.text-loop {
    animation: loop 5s infinite ease-in-out;
  }

  @keyframes loop {
    0% { transform: translateY(0); }
    25% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  }
`;

const TechStackModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechStackBox = styled(Box)`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <HomePageContainer>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <StyledProfilePic src={ProfilePic} alt="Profile" />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <BlurBackground>
            <AnimatedText variant="h1" gutterBottom className="animate-text text-loop">
              Hi, my name is <HighlightText>Bradley Matera</HighlightText>.
            </AnimatedText>
            <AnimatedText variant="h2" gutterBottom className="animate-text text-loop">
              I build things for the web.
            </AnimatedText>
            <AnimatedText variant="body1" paragraph className="animate-text text-loop">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </AnimatedText>
          </BlurBackground>
        </Grid>
        <Grid item xs={12}>
          <FaReact
            size="5em"
            color="#61dafb"
            style={{ marginTop: '20px', cursor: 'pointer', transition: 'transform 0.3s', animation: 'bounce 2s infinite' }}
            onClick={handleOpen}
            className="react-icon"
          />
        </Grid>
      </Grid>
      <TechStackModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <TechStackBox>
            <Typography variant="h6" gutterBottom>
              Current Tech Stack
            </Typography>
            <Typography variant="body1">HTML5</Typography>
            <Typography variant="body1">CSS3</Typography>
            <Typography variant="body1">JavaScript (ES6+)</Typography>
            <Typography variant="body1">React.js</Typography>
            <Typography variant="body1">Node.js</Typography>
            <Typography variant="body1">Git</Typography>
            <Typography variant="body1">npm</Typography>
            <Typography variant="body1">CSS Preprocessors (e.g., SASS)</Typography>
            <Typography variant="body1">UI/UX Design Principles</Typography>
            <Typography variant="body1">Web Accessibility</Typography>
            <Typography variant="body1">Performance Optimization</Typography>
          </TechStackBox>
        </Fade>
      </TechStackModal>
    </HomePageContainer>
  );
};

export default HomePage;