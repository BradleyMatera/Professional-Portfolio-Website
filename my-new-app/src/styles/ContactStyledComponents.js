import styled from 'styled-components';
import { Container, Box, TextField, Button } from '@mui/material';

// Container for the Contact Page
export const ContactContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #0a192f;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Form for the contact
export const ContactForm = styled(Box)`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  animation: fadeIn 1.5s ease-in-out;
`;

// Styled TextField for the contact form
export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgba(255, 255, 255, 0.5);
    }
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.7);
    }
    &.Mui-focused fieldset {
      border-color: #64ffda;
    }
  }
  .MuiInputLabel-root, .MuiOutlinedInput-input {
    color: #ffffff;
  }
`;

// Social Link Button with hover animation
export const SocialLinkButton = styled(Button)`
  color: #ffffff;
  transition: transform 0.2s ease-in-out;
  &:hover {
    color: #64ffda;
  }
`;