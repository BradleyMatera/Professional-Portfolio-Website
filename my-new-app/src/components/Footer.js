import React from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube, FaCodepen } from 'react-icons/fa';
import { 
  FooterContainer, 
  Content, 
  Section, 
  SectionTitle, 
  SectionText, 
  LinkList, 
  LinkItem, 
  Link, 
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
        <SectionText>I'm a passionate web developer focused on creating responsive and interactive web applications. Always eager to learn and take on new challenges in the ever-evolving world of web development.</SectionText>
      </Section>
      <Section>
        <SectionTitle>Quick Links</SectionTitle>
        <LinkList>
          <LinkItem><Link href="/about">About</Link></LinkItem>
          <LinkItem><Link href="/skills">Skills</Link></LinkItem>
          <LinkItem><Link href="/projects">Projects</Link></LinkItem>
          <LinkItem><Link href="/contact">Contact</Link></LinkItem>
        </LinkList>
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
      <Copyright>&copy; {new Date().getFullYear()} Bradley Matera. All rights reserved.</Copyright>
    </BottomBar>
  </FooterContainer>
);

export default Footer;