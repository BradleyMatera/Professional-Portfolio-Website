import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';

const StyledCard = styled(Card)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

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