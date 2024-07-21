import React, { useEffect } from 'react';
import { Typography, Box, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedkit, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';
import { AboutContainer, Section, HighlightText, BlurBackground, IconWrapper, ExperienceItem } from '../styles/AboutStyledComponents';

const About = () => {
  useEffect(() => {
    anime({
      targets: '.animate-text',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(200),
    });

    anime({
      targets: '.animate-icon',
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: anime.stagger(200, { start: 500 }),
    });

    anime({
      targets: '.animate-box',
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(200, { start: 700 }),
    });
  }, []);

  return (
    <AboutContainer maxWidth="md">
      <BlurBackground>
        <Section>
          <Typography variant="h2" gutterBottom className="animate-text">
            About <HighlightText>Me</HighlightText>
          </Typography>
          <Typography variant="body1" paragraph className="animate-text">
            I'm a passionate web developer with a focus on creating responsive and interactive web applications. Currently pursuing a Bachelor's degree in Web Development at Full Sail University, I'm dedicated to honing my skills in front-end technologies and modern JavaScript frameworks.
          </Typography>
        </Section>
        <Section className="animate-box">
          <Typography variant="h4" gutterBottom className="animate-text">
            Experience
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaGraduationCap size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Student at Full Sail University</Typography>
                <Typography variant="body2">Focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaLaptopCode size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Self-employed Web Developer</Typography>
                <Typography variant="body2">Showcasing projects on YouTube and providing IT consulting.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaBriefcase size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Case Manager at Mason County</Typography>
                <Typography variant="body2">Assisted clients with court-mandated activities, developing strong communication and organizational skills.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaMedkit size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Healthcare Specialist in the US Army</Typography>
                <Typography variant="body2">Provided critical healthcare services, demonstrating attention to detail and ability to work under pressure.</Typography>
              </ExperienceItem>
            </Grid>
          </Grid>
        </Section>
        <Section className="animate-box">
          <Typography variant="h4" gutterBottom className="animate-text">
            Skills
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item className="animate-icon">
              <IconButton>
                <FaReact size="2em" color="#61dafb" />
              </IconButton>
            </Grid>
            <Grid item className="animate-icon">
              <IconButton>
                <FaHtml5 size="2em" color="#e34f26" />
              </IconButton>
            </Grid>
            <Grid item className="animate-icon">
              <IconButton>
                <FaCss3Alt size="2em" color="#1572b6" />
              </IconButton>
            </Grid>
            <Grid item className="animate-icon">
              <IconButton>
                <FaJsSquare size="2em" color="#f7df1e" />
              </IconButton>
            </Grid>
          </Grid>
        </Section>
      </BlurBackground>
    </AboutContainer>
  );
};

export default About;