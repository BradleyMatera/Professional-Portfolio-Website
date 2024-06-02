import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/reactapptest">
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Brad Matera</a>
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
                  <a className="nav-link" href="/reactapptest/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reactapptest/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reactapptest/skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reactapptest/experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reactapptest/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<Home />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;
