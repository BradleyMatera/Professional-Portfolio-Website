import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Skills & Expertise</h2>
        <div className="row">
          <div className="col-lg-6">
            <h4>Web Development</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS3</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Vue</li>
              <li className="list-group-item">Angular</li>
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">MongoDB</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h4>Additional Skills</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item">Machine Learning</li>
              <li className="list-group-item">Artificial Intelligence</li>
              <li className="list-group-item">UI/UX Design</li>
              <li className="list-group-item">Responsive Design</li>
              <li className="list-group-item">Accessibility</li>
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Agile Methodologies</li>
              <li className="list-group-item">Problem Solving</li>
              <li className="list-group-item">Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
