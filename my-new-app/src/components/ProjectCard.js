import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import styled from 'styled-components';

const CardWrapper = styled(Card)`
  background: #112240;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectCard = ({ title, description, image, githubLink, liveLink }) => {
  return (
    <CardWrapper>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Add any actions if needed */}
      </CardActions>
    </CardWrapper>
  );
};

export default ProjectCard;