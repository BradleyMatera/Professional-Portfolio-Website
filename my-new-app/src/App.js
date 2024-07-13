import React, { Component } from 'react';
import styled from 'styled-components';

// Importing custom components
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';

// Styling for the main app container
const AppContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

// Main App component as a class component
class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <Header />
        <About />
        <Contact />
        <Projects />
        <Experience />
        <Skills />
        <ProjectCard />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;