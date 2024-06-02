import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="GitHub JS Portfolio"
              />
              <div className="card-body">
                <h5 className="card-title">GitHub JS Portfolio</h5>
                <p className="card-text">
                  A portfolio showcasing my JavaScript projects.
                </p>
                <a
                  href="https://github.com/BradleyMatera/JS-Portfolios"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="UI Cheat Sheet"
              />
              <div className="card-body">
                <h5 className="card-title">UI Cheat Sheet</h5>
                <p className="card-text">
                  A collection of simple UI examples.
                </p>
                <a
                  href="https://github.com/BradleyMatera/ui-cheat-sheet"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Best of React"
              />
              <div className="card-body">
                <h5 className="card-title">Best of React</h5>
                <p className="card-text">
                  A ranked list of awesome React open-source libraries and
                  tools.
                </p>
                <a
                  href="https://github.com/BradleyMatera/best-of-react"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
