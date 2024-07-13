import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

const SkillsContainer = styled(Container)`
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

class Skills extends Component {
  render() {
    return (
      <SkillsContainer maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" paragraph>
          Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
        </Typography>
        <Typography variant="body1" paragraph>
          My key skills include:
        </Typography>
        <SkillList>
          <SkillItem>Languages: HTML5, CSS3, JavaScript, C#, Python</SkillItem>
          <SkillItem>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</SkillItem>
          <SkillItem>Tools: Git, Adobe Creative Cloud, VS Code</SkillItem>
          <SkillItem>Methodologies: Agile, Waterfall, OOP, MVC Design Patterns</SkillItem>
          <SkillItem>Other: Responsive Web Design, UX Design, SQL Databases</SkillItem>
        </SkillList>
        <Typography variant="body1">
          For more details, please visit my LinkedIn profile.
        </Typography>
      </SkillsContainer>
    );
  }
}

export default Skills;