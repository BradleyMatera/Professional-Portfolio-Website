import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const HomeContainer = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  font-size: 16px;
  padding: 20px;
`;

const HeroSection = styled(animated.div)`
  background: url('https://source.unsplash.com/1600x900/?tech') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
  min-height: 500px;
  margin-bottom: 20px;
`;

const HeroText = styled.div`
  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 300;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
  }
`;

const Section = styled.div`
  padding: 60px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 5px;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2em;
  color: #007bff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const Home = () => {
  const heroProps = useSpring({
    backgroundPosition: 'center',
    from: { backgroundPosition: '100%' },
    config: { duration: 3000 },
    loop: { reverse: true }
  });

  return (
    <HomeContainer>
      <HeroSection style={heroProps}>
        <HeroText>
          <h1>Welcome to My Tech Blog</h1>
          <p>Exploring the Latest in Technology</p>
        </HeroText>
      </HeroSection>
      <Section>
        <SectionTitle>About</SectionTitle>
        <p>This is the about section.</p>
      </Section>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <p>This is the projects section.</p>
      </Section>
    </HomeContainer>
  );
};

export default Home;
