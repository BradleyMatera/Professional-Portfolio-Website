import styled from 'styled-components';
import { Container, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';

// Styled components for custom styles
export const ProjectsContainer = styled(Container)`
  padding: 60px 20px;
  background: #0a192f;
  color: #ffffff;
`;

export const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: #ffffff;
`;

export const ProjectMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; // 16:9 aspect ratio
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectContent = styled(CardContent)`
  flex-grow: 1;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  padding: 16px;
`;

export const LinkButton = styled(Button)`
  color: #fb8b24;
  border-color: #fb8b24;
  &:hover {
    background-color: rgba(251, 139, 36, 0.1);
  }
`;

export const CodePenGrid = styled(Grid)`
  margin-top: 40px;
`;