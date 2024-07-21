import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedkit } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';
import {
  ExperienceContainer,
  ExperienceList,
  ExperienceItem,
  BlurBackground,
  IconWrapper,
} from '../styles/ExperienceStyledComponents';

const experienceData = [
  { icon: FaGraduationCap, text: 'Student at Full Sail University: Engaged in rigorous coursework focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.' },
  { icon: FaLaptopCode, text: 'Web Developer (Self-Employed): Developed and showcased personal projects on YouTube channel, contributing to web development education.' },
  { icon: FaBriefcase, text: 'Case Manager at Mason County, WA: Assisted clients with court-mandated activities while employing Agile methodologies.' },
  { icon: FaBriefcase, text: 'Kitten Rescue Volunteer: Supported the wellbeing and care of kittens in a compassionate environment.' },
  { icon: FaBriefcase, text: 'Roof Loader at Stoneway Roofing Supply: Supported construction projects, emphasizing safety, teamwork, and efficient time management.' },
  { icon: FaMedkit, text: 'Healthcare Specialist in the US Army: Provided critical healthcare services including triage, physical examinations, and crisis management.' },
];

const Experience = () => {
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
    <ExperienceContainer maxWidth="md">
      <BlurBackground>
        <Typography variant="h2" gutterBottom className="animate-text">
          Experience
        </Typography>
        <Typography variant="body1" paragraph className="animate-text">
          Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
        </Typography>
        <Typography variant="body1" paragraph className="animate-text">
          My professional experience includes:
        </Typography>
        <ExperienceList>
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} className="animate-text">
              <IconWrapper>{React.createElement(item.icon, { size: '1.5em', color: '#64ffda' })}</IconWrapper>
              <Typography variant="body2">{item.text}</Typography>
            </ExperienceItem>
          ))}
        </ExperienceList>
        <Typography variant="body1" className="animate-text">
          For more details, please visit my LinkedIn profile.
        </Typography>
      </BlurBackground>
    </ExperienceContainer>
  );
};

export default Experience;