import React from 'react';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillsShowcase from './components/SkillsShowcase';
import { AppContainer, AppContent } from './styles/AppStyledComponents';

const App = () => {
  return (
    <AppContainer>
      <HeaderNavBar />
      <AppContent>
        <About />
        <Skills />
        <SkillsShowcase />
        <Projects />
        <Contact />
      </AppContent>
      <Footer />
    </AppContainer>
  );
};

export default App;