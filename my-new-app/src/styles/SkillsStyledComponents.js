import styled from 'styled-components';
import { Container } from '@mui/material';

export const SkillsContainer = styled(Container)`
  padding: 60px 20px; // Padding for spacing around the container
  text-align: center; // Center-align text
  background: #5f0f40; // Add background color
  color: #ffffff; // Text color
`;

export const SkillList = styled.ul`
  list-style-type: none; // Remove default list styles
  padding: 0; // Remove default padding
  margin: 0; // Remove default margin
`;

export const SkillItem = styled.li`
  margin-bottom: 8px; // Space between list items
`;