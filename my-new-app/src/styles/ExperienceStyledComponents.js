import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const ExperienceContainer = styled(Container)`
  padding: 60px 20px;
  text-align: center;
  background: #0a192f;
  color: #ffffff;
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

export const HighlightText = styled.span`
  color: #64ffda;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;