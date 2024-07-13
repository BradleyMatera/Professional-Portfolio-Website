import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography, Box } from '@mui/material';

const AboutContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 8px;
`;

class About extends Component {
  render() {
    return (
      <AboutContainer maxWidth="md">
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
        </Typography>
        <Box marginBottom={4}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          <SkillList>
            <SkillItem>Student at Full Sail University, focusing on front-end development using HTML5, CSS, JavaScript, and UX Design.</SkillItem>
            <SkillItem>Self-employed web developer, showcasing projects on YouTube and providing IT consulting.</SkillItem>
            <SkillItem>Case Manager at Mason County, assisting clients with court-mandated activities.</SkillItem>
            <SkillItem>Kitten Rescue Volunteer, supporting the wellbeing of kittens.</SkillItem>
            <SkillItem>Roof Loader and General Contractor, emphasizing safety and teamwork.</SkillItem>
            <SkillItem>Healthcare Specialist in the US Army, providing critical healthcare services.</SkillItem>
          </SkillList>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <SkillList>
            <SkillItem>Languages: HTML5, CSS3, JavaScript, C#, Python</SkillItem>
            <SkillItem>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</SkillItem>
            <SkillItem>Tools: Git, Adobe Creative Cloud, VS Code</SkillItem>
            <SkillItem>Methodologies: Agile, Waterfall, OOP, MVC Design Patterns</SkillItem>
            <SkillItem>Other: Responsive Web Design, UX Design, SQL Databases</SkillItem>
          </SkillList>
        </Box>
        <Typography variant="body1">
          For more details, please visit my LinkedIn profile.
        </Typography>
      </AboutContainer>
    );
  }
}

export default About;