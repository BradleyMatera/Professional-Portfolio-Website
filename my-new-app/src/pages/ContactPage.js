import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { ContactContainer, ContactForm, StyledTextField } from '../styles/ContactStyledComponents';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
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
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item>
              <motion.a href="https://github.com/BradleyMatera" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} style={{ color: '#ffffff' }}>
                GitHub
              </motion.a>
            </Grid>
            <Grid item>
              <motion.a href="https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} style={{ color: '#ffffff' }}>
                LinkedIn
              </motion.a>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </ContactContainer>
  );
};

export default ContactPage;