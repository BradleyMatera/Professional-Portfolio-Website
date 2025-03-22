import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HeaderNavBar from './components/HeaderNavBar';
import HomePage from './pages/HomeAboutPage';
import SkillsExperiencePage from './pages/SkillsExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import backgroundImage from './assets/imgs/bg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter basename="/Professional-Portfolio-Website">
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills-experience" element={<SkillsExperiencePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;