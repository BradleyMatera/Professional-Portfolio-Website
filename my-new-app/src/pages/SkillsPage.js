import React, { useState, useEffect } from 'react';
import { Typography, Grid, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from '@emotion/styled';
import BackgroundImage from '../assets/imgs/bg.jpg';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaSass, FaAccessibleIcon, FaLaptopCode } from 'react-icons/fa';
import {
  SkillsContainer,
  SkillItem,
  ShowcaseContainer,
  Skill,
  Button,
  IconGrid,
  ChartContainer,
  IconWrapper,
  ModalContent,
  Section,
  HighlightText,
  BlurBackground
} from '../styles/SkillsStyledComponents';

// Register Chart.js components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SkillsPageContainer = styled(SkillsContainer)`
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

const skillsData = [
  { icon: FaHtml5, title: 'HTML5', description: 'Markup language for creating web pages.' },
  { icon: FaCss3Alt, title: 'CSS3', description: 'Stylesheet language used for describing the presentation of a document.' },
  { icon: FaJsSquare, title: 'JavaScript (ES6+)', description: 'Programming language that is one of the core technologies of the World Wide Web.' },
  { icon: FaReact, title: 'React.js', description: 'JavaScript library for building user interfaces.' },
  { icon: FaNodeJs, title: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { icon: FaGitAlt, title: 'Git', description: 'Version control system for tracking changes in source code.' },
  { icon: FaNpm, title: 'npm', description: 'Package manager for the JavaScript programming language.' },
  { icon: FaSass, title: 'CSS Preprocessors (e.g., SASS)', description: 'Preprocessor scripting language that is interpreted or compiled into CSS.' },
  { icon: FaLaptopCode, title: 'UI/UX Design Principles', description: 'Design principles for creating user interfaces and user experiences.' },
  { icon: FaAccessibleIcon, title: 'Web Accessibility', description: 'Inclusive practice of making websites usable by people of all abilities and disabilities.' },
  { icon: FaLaptopCode, title: 'Performance Optimization', description: 'Practices to make websites faster and more efficient.' },
];

const SkillsPage = () => {
  const [frontendSkills, setFrontendSkills] = useState(3);
  const [backendSkills, setBackendSkills] = useState(1);
  const [projects, setProjects] = useState(3);
  const [totalCodeLines, setTotalCodeLines] = useState(1000);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});

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

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const data = {
    labels: ['Frontend Skills', 'Backend Skills', 'Completed Projects', 'Total Lines of Code'],
    datasets: [
      {
        label: 'Skills and Projects',
        data: [frontendSkills, backendSkills, projects, totalCodeLines],
        backgroundColor: ['#64ffda', '#64ffda', '#64ffda', '#64ffda'],
        borderColor: ['#1c1c1c', '#1c1c1c', '#1c1c1c', '#1c1c1c'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <SkillsPageContainer maxWidth="md">
      <BlurBackground>
        <Section>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" gutterBottom className="animate-text">
              Skills
            </Typography>
            <Typography variant="body1" paragraph className="animate-text">
              Passionate web developer with expertise in front-end technologies and modern JavaScript frameworks.
            </Typography>
          </motion.div>
          <IconGrid container spacing={4}>
            {skillsData.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SkillItem onClick={() => handleOpenModal(skill)}>
                  <IconWrapper>{React.createElement(skill.icon, { size: '3em', color: '#64ffda' })}</IconWrapper>
                  <Typography variant="h6">{skill.title}</Typography>
                </SkillItem>
              </Grid>
            ))}
          </IconGrid>
        </Section>
        <Section>
          <ShowcaseContainer>
            <Typography variant="h4" gutterBottom>
              Skills and Projects Showcase
            </Typography>
            <Skill>Frontend Skills: <HighlightText>{frontendSkills}</HighlightText></Skill>
            <Skill>Backend Skills: <HighlightText>{backendSkills}</HighlightText></Skill>
            <Skill>Completed Projects: <HighlightText>{projects}</HighlightText></Skill>
            <Skill>Total Lines of Code: <HighlightText>{totalCodeLines}</HighlightText></Skill>
          </ShowcaseContainer>
        </Section>
        <Section>
          <ChartContainer>
            <Bar data={data} options={{ scales: { y: { beginAtZero: true } } }} />
          </ChartContainer>
        </Section>
        <Modal open={openModal} onClose={handleCloseModal}>
          <ModalContent>
            <Typography variant="h4" gutterBottom>
              {selectedSkill.title}
            </Typography>
            <Typography variant="body1">
              {selectedSkill.description}
            </Typography>
            <Button onClick={handleCloseModal} variant="contained" sx={{ mt: 2 }}>
              Close
            </Button>
          </ModalContent>
        </Modal>
      </BlurBackground>
    </SkillsPageContainer>
  );
};

export default SkillsPage;