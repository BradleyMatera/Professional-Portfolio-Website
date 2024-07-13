import React, { Component } from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaCog } from 'react-icons/fa';

// Styled components for various parts of the header
const HeaderWrapper = styled.header`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.color || 'white'};
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.inputColor || 'white'};
  margin-left: 0.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: ${props => props.iconColor || 'white'};
  font-size: 1.2rem;
  cursor: pointer;
`;

class Header extends Component {
  render() {
    const { background, color, inputColor, iconColor } = this.props;

    return (
      <HeaderWrapper background={background}>
        <Logo color={color}>Brad Matera</Logo>
        <SearchContainer>
          <FaSearch color={inputColor || 'white'} />
          <SearchInput 
            type="text" 
            placeholder="Search the galaxy..." 
            inputColor={inputColor} 
            id="search" 
            name="search" 
          />
        </SearchContainer>
        <IconContainer>
          <IconWrapper iconColor={iconColor}><FaUser /></IconWrapper>
          <IconWrapper iconColor={iconColor}><FaCog /></IconWrapper>
        </IconContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;