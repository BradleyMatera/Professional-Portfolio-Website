import React, { useEffect } from 'react';
import { Typography, Grid, IconButton } from '@mui/material';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedkit, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';
import { AboutContainer, Section, HighlightText, BlurBackground, IconWrapper, ExperienceItem } from '../styles/AboutStyledComponents';

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
    <AboutContainer>
      <BlurBackground>
        <Section>
          <Typography variant="h2" gutterBottom className="animate-text">
            About <HighlightText>Me</HighlightText>
          </Typography>
          <Typography variant="body1" paragraph className="animate-text">
            I'm a highly motivated web developer with a solid foundation in front-end and back-end technologies, currently pursuing a Bachelor's degree in Web Development at Full Sail University. My educational journey has equipped me with a well-rounded skill set in HTML, CSS, JavaScript, React, Node.js, and UX design.
          </Typography>
          <Typography variant="body1" paragraph className="animate-text">
            Through Full Sail's rigorous coursework, I've mastered the principles of web architecture, application development, and database management. Notable courses include:
          </Typography>
        </Section>
        
        <Section className="animate-box">
          <Typography variant="h4" gutterBottom className="animate-text">
            Relevant Coursework
          </Typography>
          <ul>
            <li><Typography variant="body1" paragraph className="animate-text"><strong>WDV1100 - Introduction to Web Architecture</strong>: An in-depth exploration of web structures, focusing on designing scalable, efficient applications.</Typography></li>
            <li><Typography variant="body1" paragraph className="animate-text"><strong>DEV2319 - Interfaces and Usability</strong>: Taught me how to create user-friendly interfaces prioritizing user experience.</Typography></li>
            <li><Typography variant="body1" paragraph className="animate-text"><strong>DEV2301 - Application Development</strong>: Advanced my skills in full-stack development and project planning.</Typography></li>
            <li><Typography variant="body1" paragraph className="animate-text"><strong>CTI3622 - Database Systems</strong>: A comprehensive course on database design, enabling efficient data handling using SQL and NoSQL.</Typography></li>
            <li><Typography variant="body1" paragraph className="animate-text"><strong>WDV353 - Server-Side Languages</strong>: Focused on developing back-end functionality, including API creation and data security practices.</Typography></li>
          </ul>
        </Section>

        <Section className="animate-box">
          <Typography variant="h4" gutterBottom className="animate-text">
            Technical Skills
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
            <Grid item className="animate-icon">
              <IconButton>
                <FaNodeJs size="2em" color="#3C873A" />
              </IconButton>
            </Grid>
          </Grid>
          <Typography variant="body1" paragraph className="animate-text">
            I specialize in responsive, accessible web applications, integrating Tailwind CSS for styling, and have experience with tools like Jest for testing and Postman for API validation.
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
                <Typography variant="body2">Pursuing a Bachelor's in Web Development, focused on HTML, CSS, JavaScript, UX, and accessibility standards.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaLaptopCode size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Independent Web Developer</Typography>
                <Typography variant="body2">Built various projects showcased on GitHub, including interactive applications, with a focus on user experience and modern design.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaBriefcase size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Case Manager at Mason County</Typography>
                <Typography variant="body2">Enhanced organizational skills, working closely with clients and managing sensitive data.</Typography>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ExperienceItem className="animate-text">
                <IconWrapper className="animate-icon">
                  <FaMedkit size="1.5em" color="#64ffda" />
                </IconWrapper>
                <Typography variant="h6">Healthcare Specialist, US Army</Typography>
                <Typography variant="body2">Developed critical problem-solving skills and the ability to work under pressure during my service.</Typography>
              </ExperienceItem>
            </Grid>
          </Grid>
        </Section>
      </BlurBackground>
    </AboutContainer>
  );
};

export default AboutPage;