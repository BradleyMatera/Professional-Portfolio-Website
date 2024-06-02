import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website</strong>
            <p>
              Created a responsive personal website using HTML5, CSS3, and JavaScript. Integrated GitHub API to display recent projects dynamically.
            </p>
          </li>
          <li>
            <strong>Project Management App (React.js)</strong>
            <p>
              Developed a task management application utilizing React.js and Firebase. Implemented user authentication and data storage with real-time updates.
            </p>
          </li>
          <li>
            <strong>Travel Site</strong>
            <p>
              Demonstrates my workflow, version control practices, and project development process using GitHub, VS Code, and the Mac terminal.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
