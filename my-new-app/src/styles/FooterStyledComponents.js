import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #1c1c1c;
  color: #ffffff;
  padding: 40px 20px 20px;
  font-family: Arial, sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
  flex-basis: 30%;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: #fb8b24;
`;

export const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;
  &:hover {
    color: #fb8b24;
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.a`
  font-size: 24px;
  margin-right: 20px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #fb8b24;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 14px;
`;