import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ContactContainer, ContactForm, StyledTextField } from '../styles/ContactStyledComponents';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted');
  };

  return (
    <ContactContainer maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" paragraph>
        I'm always interested in new opportunities, collaborations, or just chatting about web development. Feel free to reach out!
      </Typography>
      <Typography variant="body1" paragraph>
        Email me directly at: <a href="mailto:bradmatera@gmail.com" style={{color: '#ffffff'}}>bradmatera@gmail.com</a>
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
          label="Name"
          margin="normal"
          variant="outlined"
          required
        />
        <StyledTextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          required
          type="email"
        />
        <StyledTextField
          fullWidth
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2, backgroundColor: '#ffffff', color: '#e36414' }}
        >
          Send Message
        </Button>
      </ContactForm>
      <Box mt={4}>
        <Typography variant="body1">
          You can also find me on:
        </Typography>
        <Box mt={2}>
          <a href="https://github.com/BradleyMatera" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', marginRight: '20px'}}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff'}}>
            LinkedIn
          </a>
        </Box>
      </Box>
    </ContactContainer>
  );
};

export default Contact;