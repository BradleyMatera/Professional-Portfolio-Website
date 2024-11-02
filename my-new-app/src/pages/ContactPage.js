import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { ContactContainer, ContactForm, StyledTextField, SocialLinkButton } from '../styles/ContactStyledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    to_name: 'Bradley Matera',
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init("bhtw4DGUnI8tHgIXQ");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    window.emailjs.send('service_d897zpl', 'template_dibo5n9', formData)
      .then(() => {
        setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
        setFormData({ to_name: 'Bradley Matera', from_name: '', message: '', reply_to: '' });
      })
      .catch((error) => {
        setSnackbar({ open: true, message: `Failed to send message: ${error.text}`, severity: 'error' });
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ContactContainer maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          I'm always interested in new opportunities, collaborations, or just chatting about web development. Feel free to reach out!
        </Typography>
        <Typography variant="body1" paragraph>
          Email me directly at: <a href="mailto:bradmatera@gmail.com" style={{ color: '#64ffda', textDecoration: 'underline' }}>bradmatera@gmail.com</a>
        </Typography>
        <Typography variant="body1" paragraph>
          Or use the form below:
        </Typography>
        
        <ContactForm
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <StyledTextField
            fullWidth
            label="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <StyledTextField
            fullWidth
            label="Your Email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            type="email"
          />
          <StyledTextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: 2,
              backgroundColor: '#64ffda',
              color: '#0a192f',
              '&:hover': { backgroundColor: '#52c7c9' }
            }}
          >
            Send Message
          </Button>
        </ContactForm>
        
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '40px' }}>
          <Grid item>
            <SocialLinkButton
              href="https://github.com/BradleyMatera"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub size="2em" />
            </SocialLinkButton>
          </Grid>
          <Grid item>
            <SocialLinkButton
              href="https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size="2em" />
            </SocialLinkButton>
          </Grid>
        </Grid>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default ContactPage;