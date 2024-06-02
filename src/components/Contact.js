import React from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  alert(`Thank you for your message, ${name}! I will get back to you soon.`);

  event.target.name.value = '';
  event.target.email.value = '';
  event.target.message.value = '';
};

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Contact Info</h5>
                <p className="card-text">
                  <i className="fas fa-map-marker-alt me-2"></i> Olympia, WA, USA<br />
                  <i className="fas fa-envelope me-2"></i> bradmatera@gmail.com<br />
                  <i className="fas fa-phone me-2"></i> +1 (360) 970-0581
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/brad-matera-889179260/" target="_blank" className="btn btn-outline-primary me-3">
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
  );
};

export default Contact;
