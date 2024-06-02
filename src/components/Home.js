import React from 'react';
import './Home.css'; // Make sure to create and style this file if needed

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="home-container">
      <h1>Welcome to Brad Matera's Portfolio</h1>
      <section id="about" className="section-about">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a web developer with a passion for building beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React.</p>
        </div>
      </section>

      <section id="projects" className="section-projects">
        <div className="container">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="section-skills">
        <div className="container">
          <h2>Skills</h2>
          <p>Here are some of the skills I have:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="section-experience">
        <div className="container">
          <h2>Experience</h2>
          <p>Here's my professional experience:</p>
          <ul>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section-contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h5>Contact Info</h5>
            <p>Olympia, WA, USA<br />bradmatera@gmail.com<br />+1 (360) 970-0581</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
