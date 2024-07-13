import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components for navigation bar
const NavBarWrapper = styled.nav`
  background-color: #2c3e50; // Dark background color for the navbar
  padding: 1rem 2rem; // Padding for spacing
  display: flex; // Flexbox layout for alignment
  justify-content: space-between; // Space between items
  align-items: center; // Center alignment for items
  position: fixed; // Fixed position
  width: 100%; // Full width
  top: 0; // Top of the page
  z-index: 1000; // High z-index to stay above other content
`;

const NavLinks = styled.ul`
  display: flex; // Flexbox layout for links
  list-style: none; // Remove default list style
  margin: 0; // Remove default margin
  padding: 0; // Remove default padding
`;

const NavLinkItem = styled.li`
  margin-left: 2rem; // Margin between links
`;

const StyledLink = styled.a`
  color: white; // White text color
  text-decoration: none; // Remove underline
  font-size: 1rem; // Font size
  &:hover {
    color: #1e90ff; // Blue color on hover
  }
`;

const NavBarBrand = styled.a`
  font-size: 1.5rem; // Larger font size for the brand
  color: white; // White text color
  text-decoration: none; // Remove underline
  font-weight: bold; // Bold font
  &:hover {
    color: #1e90ff; // Blue color on hover
  }
`;

class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <NavBarBrand href="/">Brad Matera</NavBarBrand>
        <NavLinks>
          <NavLinkItem>
            <StyledLink href="/">Home</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/about">About</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/contact">Contact</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/projects">Projects</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/experience">Experience</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/skills">Skills</StyledLink>
          </NavLinkItem>
        </NavLinks>
      </NavBarWrapper>
    );
  }
}

export default NavBar;