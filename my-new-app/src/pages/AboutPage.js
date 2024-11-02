import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedkit } from 'react-icons/fa';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/bg.jpg';

const AboutPageContainer = styled(Box)`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HighlightText = styled.span`
  color: #64ffda;
`;

// Styled component with the blur effect background
const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #64ffda;
  margin-right: 10px;
`;

const AboutPage = () => {
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
    <AboutPageContainer>
      <BlurBackground>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" gutterBottom className="animate-text">
            About <HighlightText>Me</HighlightText>
          </Typography>
        </motion.div>
        <Typography variant="body1" paragraph className="animate-text">
          I'm a passionate web developer with a focus on creating responsive and interactive web applications. Currently pursuing a Bachelor's degree in Web Development at Full Sail University, I'm dedicated to honing my skills in front-end technologies and modern JavaScript frameworks.
        </Typography>
      </BlurBackground>
    </AboutPageContainer>
  );
};

export default AboutPage;