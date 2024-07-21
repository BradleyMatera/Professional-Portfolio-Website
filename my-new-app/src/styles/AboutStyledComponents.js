import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

export const AboutContainer = styled(Container)`
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

export const HighlightText = styled.span`
  color: #64ffda;
`;

export const BlurBackground = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(10, 25, 47, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const ExperienceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const AnimatedText = styled(Typography)`
  &.animate-text {
    opacity: 0;
    transform: translateY(50px);
  }

  &.text-loop {
    animation: loop 5s infinite ease-in-out;
  }

  @keyframes loop {
    0% { transform: translateY(0); }
    25% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  }
`;