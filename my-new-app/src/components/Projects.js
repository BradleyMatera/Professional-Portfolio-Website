import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import { FaGithub, FaExternalLinkAlt, FaCodepen } from 'react-icons/fa';

const ProjectsContainer = styled(Container)`
  padding: 60px 20px;
  background: #fb8b24;
  color: #ffffff;
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: #ffffff;
`;

const ProjectMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

const ProjectContent = styled(CardContent)`
  flex-grow: 1;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  padding: 16px;
`;

const LinkButton = styled(Button)`
  color: #fb8b24;
  border-color: #fb8b24;
  &:hover {
    background-color: rgba(251, 139, 36, 0.1);
  }
`;

const CodePenGrid = styled(Grid)`
  margin-top: 40px;
`;

const Projects = () => {
  const projects = [
    {
      title: "Interactive Pokedex",
      description: "An engaging Pokedex application built with HTML, Tailwind CSS, and JavaScript. It integrates various Pokémon APIs to provide a comprehensive user experience.",
      image: "https://via.placeholder.com/400x225?text=Pokedex+App",
      githubLink: "https://github.com/BradleyMatera/TESTAPP",
      liveLink: "https://bradleymatera.github.io/TESTAPP/",
    },
    {
      title: "Mom's Website",
      description: "A responsive website built for my mom's business using HTML, CSS, and JavaScript. Features include a photo gallery, contact form, and service descriptions.",
      image: "https://via.placeholder.com/400x225?text=Mom's+Website",
      githubLink: "https://github.com/BradleyMatera/Moms-website",
      liveLink: "https://bradleymatera.github.io/Moms-website/",
    },
    {
      title: "Dev2501 Project",
      description: "A project developed as part of the Dev2501 course, showcasing various web development skills and techniques.",
      image: "https://via.placeholder.com/400x225?text=Dev2501+Project",
      githubLink: "https://github.com/BradleyMatera/Matera_Bradley_Dev2501",
    },
  ];

  const codePens = [
    { title: "Arrays and Classes Exercise", link: "https://codepen.io/student-account-bradley-matera/pen/xxQEqdR" },
    { title: "Data Visualization", link: "https://codepen.io/student-account-bradley-matera/pen/JjBWJLO" },
    { title: "Loop Exercise", link: "https://codepen.io/student-account-bradley-matera/pen/xxQNWyR" },
  ];

  return (
    <ProjectsContainer maxWidth="lg" id="projects">
      <Typography variant="h2" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectMedia
                image={project.image}
                title={project.title}
              />
              <ProjectContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </ProjectContent>
              <ProjectLinks>
                <LinkButton startIcon={<FaGithub />} href={project.githubLink} target="_blank" rel="noopener noreferrer" variant="outlined">
                  GitHub
                </LinkButton>
                {project.liveLink && (
                  <LinkButton startIcon={<FaExternalLinkAlt />} href={project.liveLink} target="_blank" rel="noopener noreferrer" variant="outlined">
                    Live Demo
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
      
      <CodePenGrid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom align="center">
            CodePen Projects
          </Typography>
        </Grid>
        {codePens.map((pen, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pen.title}
                </Typography>
              </ProjectContent>
              <ProjectLinks>
                <LinkButton startIcon={<FaCodepen />} href={pen.link} target="_blank" rel="noopener noreferrer" variant="outlined">
                  View on CodePen
                </LinkButton>
              </ProjectLinks>
            </ProjectCard>
          </Grid>
        ))}
      </CodePenGrid>
    </ProjectsContainer>
  );
};

export default Projects;