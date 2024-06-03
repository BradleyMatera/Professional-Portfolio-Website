import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Header from './components/Header';
import styled from 'styled-components';
import './App.css';

const NavBar = styled.nav`
  background-color: #61dafb;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
`;

const NavBarBrand = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.5em;
`;

const NavBarLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 0 10px;
`;

function App() {
  return (
    <Router basename="/reactapptest">
      <div className="App">
        <Header />
        <NavBar className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <NavBarBrand className="navbar-brand" to="/">Brad Matera</NavBarBrand>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavBarLink className="nav-link" to="/about">About</NavBarLink>
                </li>
                <li className="nav-item">
                  <NavBarLink className="nav-link" to="/projects">Projects</NavBarLink>
                </li>
                <li className="nav-item">
                  <NavBarLink className="nav-link" to="/skills">Skills</NavBarLink>
                </li>
                <li className="nav-item">
                  <NavBarLink className="nav-link" to="/experience">Experience</NavBarLink>
                </li>
                <li className="nav-item">
                  <NavBarLink className="nav-link" to="/contact">Contact</NavBarLink>
                </li>
              </ul>
            </div>
          </div>
        </NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
