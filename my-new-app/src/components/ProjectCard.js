import React from 'react';
import styled from 'styled-components';

// Styled components for the project card
const StyledCard = styled.div`
  background-color: #fff; // White background for the card
  padding: 20px; // Padding inside the card
  margin: 20px; // Margin outside the card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Shadow for depth
  border-radius: 8px; // Rounded corners
  display: flex; // Flexbox layout
  flex-direction: column; // Column layout
  justify-content: space-between; // Space between items
  min-height: 200px; // Minimum height
`;

const ProjectCard = ({ title, description }) => (
  <StyledCard>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledCard>
);

export default ProjectCard;