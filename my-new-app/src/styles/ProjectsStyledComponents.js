import styled from 'styled-components';
import { Container, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';

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
  transition: box-shadow 0.3s ease, transform 0.3s ease;
`;

export const ProjectMedia = styled(CardMedia)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px 8px 0 0;
`;

export const ProjectContent = styled(CardContent)`
  flex-grow: 1;
  text-align: center;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  padding: 16px;
  background-color: rgba(10, 25, 47, 0.9);
  border-radius: 0 0 8px 8px;
`;

export const LinkButton = styled(Button)`
  color: #fb8b24;
  border-color: #fb8b24;
  font-weight: bold;
  &:hover {
    background-color: rgba(251, 139, 36, 0.1);
  }
`;

export const CodePenGrid = styled(Grid)`
  margin-top: 40px;
`;