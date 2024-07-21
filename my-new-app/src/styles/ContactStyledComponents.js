import styled from 'styled-components';
import { Container, Box, TextField } from '@mui/material';

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
      border-color: #ffffff;
    }
  }
  .MuiInputLabel-root, .MuiOutlinedInput-input {
    color: #ffffff;
  }
`;