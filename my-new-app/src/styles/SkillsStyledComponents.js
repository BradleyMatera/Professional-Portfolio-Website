import styled from 'styled-components';
import { Container, Button as MuiButton, Grid } from '@mui/material';

// Container for the Skills Page
export const SkillsContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #0a192f;
  color: #ffffff;
`;

// List item for each skill
export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  padding: 20px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #1c1c1c;
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transition: background-color 0.3s ease;
  }
`;

// Container for the showcase section
export const ShowcaseContainer = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

// Styled component for individual skill
export const Skill = styled.div`
  font-size: 1.5rem;
  margin: 10px 0;
`;

// Button for interactions
export const Button = styled(MuiButton)`
  background-color: #fb8b24;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #e36414;
  }
`;

// Grid for icons
export const IconGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

// Container for the chart
export const ChartContainer = styled.div`
  margin-top: 40px;
  background: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
`;

// Blur background for sections
export const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

// Highlight text style
export const HighlightText = styled.span`
  color: #64ffda;
`;

// Wrapper for icons
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  & > svg {
    font-size: 3rem;
  }
`;

// Section for different parts of the page
export const Section = styled.div`
  margin-bottom: 20px;
`;

// Modal content for displaying skill details
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1c1c1c;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  text-align: center;
`;