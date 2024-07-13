import React from 'react';
import styled from 'styled-components';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillsShowcase from './components/SkillsShowcase';

const AppContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <HeaderNavBar />
      <About />
      <Skills />
      <SkillsShowcase />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

export default App;