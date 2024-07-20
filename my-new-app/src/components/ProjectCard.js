import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { StyledCard } from '../styles/ProjectCardStyledComponents';

const ProjectCard = ({ title, description }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default ProjectCard;