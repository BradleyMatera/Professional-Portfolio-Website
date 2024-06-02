import React from 'react';
import './Home.css'; // Make sure to create and style this file if needed

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Brad Matera's Portfolio</h1>
      <section id="about" className="section-about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Brad Matera, a passionate web developer from Olympia, WA. 
            I specialize in creating dynamic and beautiful web pages using HTML, CSS, JavaScript, and React. 
            I have been honing my skills for over a year and love bringing ideas to life in the browser.
          </p>
        </div>
      </section>

      <section id="projects" className="section-projects">
        <div className="container">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
          <ul>
            <li>
              <strong>Portfolio Website:</strong> 
              A personal portfolio website to showcase my projects and skills. 
              <a href="https://github.com/chunkywizard1992/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li>
              <strong>Task Manager App:</strong> 
              A web application to manage daily tasks with features like task creation, editing, and deletion. 
              <a href="https://github.com/chunkywizard1992/task-manager" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li>
              <strong>E-commerce Website:</strong> 
              A mock e-commerce site built with React and Redux for state management. 
              <a href="https://github.com/chunkywizard1992/ecommerce" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="section-skills">
        <div className="container">
          <h2>Skills</h2>
          <p>Here are some of the skills I have:</p>
          <ul>
            <li>HTML & CSS: Proficient in creating responsive and accessible web pages.</li>
            <li>JavaScript: Experienced in writing clean and efficient JavaScript code.</li>
            <li>React: Skilled in building dynamic single-page applications with React.</li>
            <li>Git & GitHub: Proficient in version control using Git and GitHub.</li>
            <li>Node.js & Express: Basic knowledge of backend development with Node.js and Express.</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="section-experience">
        <div className="container">
          <h2>Experience</h2>
          <p>Here's my professional experience:</p>
          <ul>
            <li>
              <strong>Frontend Developer Intern</strong> at XYZ Company (June 2023 - Present)
              <ul>
                <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery.</li>
                <li>Collaborated with designers to create clean interfaces and simple, intuitive interactions and experiences.</li>
                <li>Carried out quality assurance tests to discover errors and optimize usability.</li>
              </ul>
            </li>
            <li>
              <strong>Freelance Web Developer</strong> (March 2022 - May 2023)
              <ul>
                <li>Worked on a variety of freelance projects, developing web applications for small businesses and individual clients.</li>
                <li>Managed all aspects of web development from concept to deployment.</li>
              </ul>
            </li>
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
