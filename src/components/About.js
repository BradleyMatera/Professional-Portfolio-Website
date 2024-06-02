import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <p>
          Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design,
          currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies
          and responsive design principles. Seeking a remote internship in web/software development
          to leverage my technical acumen and passion for innovation.
        </p>
        <p>
          <strong>Skills:</strong>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript, C#, Python</li>
            <li>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</li>
            <li>Tools: Git, Adobe Creative Cloud, VS Code</li>
            <li>Methodologies: Agile, Waterfall, OOP, MVC Design Patterns</li>
            <li>Other: Responsive Web Design, UX Design, SQL Databases</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default About;
