import styled from 'styled-components';
import { Container, Box, TextField } from '@mui/material';

export const ContactContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #e36414;
  color: #ffffff;
`;

export const ContactForm = styled(Box)`
  margin-top: 20px;
`;

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