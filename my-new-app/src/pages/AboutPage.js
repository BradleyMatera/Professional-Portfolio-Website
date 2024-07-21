import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedkit } from 'react-icons/fa';
import { AboutContainer, ExperienceList, ExperienceItem, HighlightText, BlurBackground, IconWrapper, AnimatedText } from '../styles/AboutStyledComponents';

const experienceData = [
  { icon: FaGraduationCap, title: 'Student at Full Sail University', description: 'Focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.' },
  { icon: FaLaptopCode, title: 'Self-employed Web Developer', description: 'Showcasing projects on YouTube and providing IT consulting.' },
  { icon: FaBriefcase, title: 'Case Manager at Mason County', description: 'Assisted clients with court-mandated activities, developing strong communication and organizational skills.' },
  { icon: FaMedkit, title: 'Healthcare Specialist in the US Army', description: 'Provided critical healthcare services, demonstrating attention to detail and ability to work under pressure.' },
];

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

    anime({
      targets: '.animate-icon',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo',
      delay: anime.stagger(300),
    });
  }, []);

  return (
    <AboutContainer>
      <BlurBackground>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <AnimatedText variant="h2" gutterBottom className="animate-text text-loop">
            About <HighlightText>Me</HighlightText>
          </AnimatedText>
        </motion.div>
        <AnimatedText variant="body1" paragraph className="animate-text text-loop">
          I'm a passionate web developer with a focus on creating responsive and interactive web applications. Currently pursuing a Bachelor's degree in Web Development at Full Sail University, I'm dedicated to honing my skills in front-end technologies and modern JavaScript frameworks.
        </AnimatedText>
        <Box marginBottom={4}>
          <AnimatedText variant="h4" gutterBottom className="animate-text text-loop">
            Experience
          </AnimatedText>
          <ExperienceList>
            {experienceData.map((item, index) => (
              <ExperienceItem key={index} className="animate-text">
                <IconWrapper className="animate-icon">{React.createElement(item.icon, { size: '1.5em', color: '#64ffda' })}</IconWrapper>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Box>
      </BlurBackground>
    </AboutContainer>
  );
};

export default AboutPage;