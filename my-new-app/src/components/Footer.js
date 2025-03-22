import React from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube, FaCodepen } from 'react-icons/fa';
import { 
  FooterContainer, 
  Content, 
  Section, 
  SectionTitle, 
  SectionText, 
  SocialIcons, 
  IconWrapper, 
  BottomBar, 
  Copyright 
} from '../styles/FooterStyledComponents';

const Footer = () => (
  <FooterContainer>
    <Content>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>Army veteran and web developer passionate about creating responsive, accessible web applications. Currently a student at Full Sail University, preparing for an AWS internship in Summer 2025.</SectionText>
      </Section>
      <Section>
        <SectionTitle>Connect</SectionTitle>
        <SocialIcons>
          <IconWrapper href="https://github.com/BradleyMatera" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </IconWrapper>
          <IconWrapper href="https://www.youtube.com/@bradmatera" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconWrapper>
          <IconWrapper href="https://codepen.io/student-account-bradley-matera" target="_blank" rel="noopener noreferrer">
            <FaCodepen />
          </IconWrapper>
        </SocialIcons>
        <SectionText>Email: bradmatera@gmail.com</SectionText>
      </Section>
    </Content>
    <BottomBar>
      <Copyright>© 2025 Bradley Matera. All rights reserved.</Copyright>
    </BottomBar>
  </FooterContainer>
);

export default Footer;