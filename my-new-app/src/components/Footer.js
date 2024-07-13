import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaYoutube, FaCodepen } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1c1c1c;
  color: #ffffff;
  padding: 40px 20px 20px;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex-basis: 30%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: #fb8b24;
`;

const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;
  &:hover {
    color: #fb8b24;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.a`
  font-size: 24px;
  margin-right: 20px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #fb8b24;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

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
          <LinkItem><Link href="#about">About</Link></LinkItem>
          <LinkItem><Link href="#skills">Skills</Link></LinkItem>
          <LinkItem><Link href="#projects">Projects</Link></LinkItem>
          <LinkItem><Link href="#contact">Contact</Link></LinkItem>
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
          <IconWrapper href="https://www.youtube.com/channel/UCoSTyFXtQD48XOqXVx4x-uw" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconWrapper>
          <IconWrapper href="https://codepen.io/tv/bNOBEL" target="_blank" rel="noopener noreferrer">
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