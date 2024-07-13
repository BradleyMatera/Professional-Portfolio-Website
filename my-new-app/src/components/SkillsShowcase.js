import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components for layout and styling
const ShowcaseContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

const Skill = styled.div`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #fb8b24;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #e36414;
  }
`;

class SkillsShowcase extends Component {
  constructor(props) {
    super(props);
    // Initialize state to track skills and projects
    this.state = {
      frontendSkills: 0,
      backendSkills: 0,
      projects: 0,
      totalCodeLines: 0,
    };
    // Bind event handler methods
    this.addFrontendSkill = this.addFrontendSkill.bind(this);
    this.addBackendSkill = this.addBackendSkill.bind(this);
    this.addProject = this.addProject.bind(this);
    this.addCodeLines = this.addCodeLines.bind(this);
  }

  // Lifecycle method to simulate fetching initial data
  componentDidMount() {
    // Simulate fetching initial data with a delay
    setTimeout(() => {
      this.setState({
        frontendSkills: 3,
        backendSkills: 1,
        projects: 3,
        totalCodeLines: 1000,
      });
    }, 1000); // 1 second delay
  }

  // Method to add a frontend skill
  addFrontendSkill() {
    this.setState((prevState) => ({ frontendSkills: prevState.frontendSkills + 1 }));
  }

  // Method to add a backend skill
  addBackendSkill() {
    this.setState((prevState) => ({ backendSkills: prevState.backendSkills + 1 }));
  }

  // Method to add a project
  addProject() {
    this.setState((prevState) => ({ projects: prevState.projects + 1 }));
  }

  // Method to add code lines
  addCodeLines() {
    this.setState((prevState) => ({ totalCodeLines: prevState.totalCodeLines + 100 }));
  }

  render() {
    const { frontendSkills, backendSkills, projects, totalCodeLines } = this.state;

    return (
      <ShowcaseContainer>
        <h2>Skills and Projects Showcase</h2>
        <Skill>Frontend Skills: {frontendSkills}</Skill>
        <Skill>Backend Skills: {backendSkills}</Skill>
        <Skill>Completed Projects: {projects}</Skill>
        <Skill>Total Lines of Code: {totalCodeLines}</Skill>
        <Button onClick={this.addFrontendSkill}>Learn Frontend Skill</Button>
        <Button onClick={this.addBackendSkill}>Learn Backend Skill</Button>
        <Button onClick={this.addProject}>Complete Project</Button>
        <Button onClick={this.addCodeLines}>Write 100 Lines of Code</Button>
      </ShowcaseContainer>
    );
  }
}

export default SkillsShowcase;