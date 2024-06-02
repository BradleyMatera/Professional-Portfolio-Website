import React from 'react';

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Welcome to Brad Matera's Portfolio</h1>
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">About Me</h2>
          <p>
            I am a dedicated web developer with a passion for creating responsive and user-friendly websites. With extensive experience in various JavaScript frameworks and libraries such as React.js, Vue.js, Angular.js, and Vanilla JavaScript, I strive to deliver high-quality projects that meet the needs of clients and users alike.
          </p>
        </div>
      </section>

      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/BradleyMatera/JS-Portfolios" target="_blank" rel="noopener noreferrer">
                JS-Portfolios: Travel Site
              </a>
              - A foundational project showcasing workflow, version control, and project development process using GitHub, VS Code, and Mac terminal.
            </li>
            <li>
              <a href="https://github.com/BradleyMatera/WDV-119-Bradley-Matera" target="_blank" rel="noopener noreferrer">
                WDV-119: Project and Portfolio I: Web Development
              </a>
              - Demonstrates commitment to industry-standard version control methodologies for efficient and scalable project evolution.
            </li>
            <li>
              <a href="https://github.com/chunkywizard1992/MateraBradleyPortfolioPage" target="_blank" rel="noopener noreferrer">
                MateraBradleyPortfolioPage
              </a>
              - Github repository for my Portfolio Page.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Skills</h2>
          <ul>
            <li>Frameworks/Libraries: React.js, Vue.js, Angular.js, jQuery</li>
            <li>Languages: HTML5, CSS3, JavaScript</li>
            <li>Tools: Git, Adobe Creative Cloud, VS Code</li>
            <li>Other: Responsive Web Design, UX Design, SQL Databases</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <p>
            <strong>Full Sail University (Aug 2023 - Present)</strong>
            <br />
            Student engaged in rigorous coursework focusing on front-end development using HTML5, CSS, JavaScript, and UX Design. Coordinated Agile-based projects utilizing collaboration tools like GitHub and Discord.
          </p>
          <p>
            <strong>Self-employed (Jan 2023 - Present)</strong>
            <br />
            Developed and showcased personal projects on YouTube channel, contributing to web development education. Delivered IT consulting, computer repair, and networking services to clients.
          </p>
          <p>
            <strong>Mason County, WA (Sep 2022 - Jan 2023)</strong>
            <br />
            Case Manager guiding clients through the court process, assisting with court-mandated activities, and ensuring comprehensive documentation.
          </p>
          <p>
            <strong>Kitten Rescue (Jun 2020 - Sep 2022)</strong>
            <br />
            Contributed to the wellbeing and care of kittens, emphasizing kennel maintenance, healthcare assistance, and behavioral support.
          </p>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Get in Touch</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required autoComplete="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required autoComplete="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required autoComplete="off"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Contact Info</h5>
                  <p className="card-text">
                    <i className="fas fa-map-marker-alt me-2"></i> Olympia, WA, USA
                    <br />
                    <i className="fas fa-envelope me-2"></i> bradmatera@gmail.com
                    <br />
                    <i className="fas fa-phone me-2"></i> +1 (360) 970-0581
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/" target="_blank" className="btn btn-outline-primary me-3">
                  <i className="fab fa-linkedin me-2"></i> LinkedIn
                </a>
                <a href="https://github.com/chunkywizard1992" target="_blank" className="btn btn-outline-dark me-3">
                  <i className="fab fa-github me-2"></i> GitHub
                </a>
                <a href="https://www.youtube.com/channel/UCo4EcyuHEjfSfozw8LrwfZg" target="_blank" className="btn btn-outline-danger">
                  <i className="fab fa-youtube me-2"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
