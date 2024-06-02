import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Professional Experience</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Junior Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Full Sail University Projects</h6>
                <p className="card-text">
                  Developed and maintained web applications using HTML, CSS, and JavaScript. Collaborated with team members on various academic projects, ensuring timely completion and adherence to project specifications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Health Care Specialist</h5>
                <h6 className="card-subtitle mb-2 text-muted">US Army</h6>
                <p className="card-text">
                  Provided comprehensive healthcare support in high-stress environments. Demonstrated exceptional crisis management skills and the ability to perform under pressure during deployment in Kandahar, Afghanistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
