import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const ContactContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
`;

const ContactForm = styled(Box)`
  margin-top: 20px;
`;

const Contact = () => (
  <ContactContainer maxWidth="md">
    <Typography variant="h2" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1" paragraph>
      Forward-thinking web developer with expertise in HTML5, JavaScript, C#, and UX Design, currently pursuing a Bachelor's degree in Web Development. Adept in Agile methodologies and responsive design principles.
    </Typography>
    <Typography variant="body1" paragraph>
      If you are interested in collaborating or have any questions, feel free to reach out.
    </Typography>
    <ContactForm
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Message"
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginTop: 2 }}
      >
        Send
      </Button>
    </ContactForm>
    <Typography variant="body1">
      For more details, please visit my LinkedIn profile.
    </Typography>
  </ContactContainer>
);

export default Contact;
