import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

// Styled component for the container
const ProjectsWrapper = styled.div`
  padding: 60px 20px; // Padding for spacing
  text-align: center; // Center-align text
  background: #e36414; // Add background color
  color: #ffffff; // Text color
`;

const ProjectList = styled.div`
  display: flex; // Flexbox layout for projects
  flex-wrap: wrap; // Wrap projects to new lines if needed
  justify-content: center; // Center align projects
`;

const ProjectDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  color: #000000;
  border-radius: 8px;
  text-align: left;
`;

const ProjectLink = styled.a`
  color: #0f4c5c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Mom's Site",
          description: 'A comprehensive and visually appealing website built for my mom using cutting-edge web technologies.',
          details: `This project involved creating a fully responsive, user-friendly website for my mom's business, showcasing her services and expertise. The site includes several key features:

          - Photo Gallery: A dynamic gallery showcasing high-quality images of completed projects and services.
          - Contact Form: An interactive form allowing potential clients to easily reach out for inquiries or bookings.
          - Service Descriptions: Detailed, engaging descriptions of all services offered, helping visitors understand the value proposition.
          - Responsive Design: The site is optimized for all devices, ensuring a seamless experience on desktops, tablets, and mobile phones.
          - Performance Optimization: Implemented lazy loading and image optimization techniques to ensure fast load times.
          - SEO Enhancements: Incorporated meta tags, semantic HTML, and structured data to improve search engine visibility.
          - Accessibility Features: Ensured the site meets WCAG guidelines for accessibility, including proper contrast ratios and screen reader compatibility.
          - Testimonials Section: A dedicated area featuring client testimonials to build trust and credibility.
          - Interactive Map: Integration of Google Maps API to help clients easily locate the business.
          - Newsletter Signup: A feature allowing visitors to subscribe for updates and special offers.

          The design is clean, modern, and aligns with current web design trends, ensuring an engaging user experience that effectively represents my mom's brand and services.`,
          liveLink: 'https://bradleymatera.github.io/Moms-website/',
          githubLink: 'https://github.com/BradleyMatera/Moms-website',
        },
        {
          title: 'React Professional Portfolio Website',
          description: 'A sophisticated and feature-rich application designed to showcase various web development skills and professional accomplishments.',
          details: `This project is a comprehensive professional portfolio website built using React.js, leveraging the power of modern web development practices. It serves as a dynamic showcase of my skills, experience, projects, and contact information, presented in a clean, organized, and visually appealing manner.

          Key Features and Components:
          - NavBar Component: A fixed navigation bar providing smooth, single-page navigation to different sections of the website.
          - About Component: An in-depth section providing a compelling overview of my skills, experience, and professional journey.
          - Projects Component: A curated list of key projects, each with detailed descriptions, technologies used, and links to live demos and source code.
          - Experience Component: A comprehensive timeline of my professional experience, highlighting key roles, responsibilities, and achievements.
          - Skills Component: An interactive display of my technical skills, categorized by proficiency levels and areas of expertise.
          - Contact Component: A robust contact form with form validation, allowing visitors to reach out directly through the website.
          - Footer Component: A detailed footer with additional information, social media links, and a sitemap.

          Technical Highlights:
          - Built with React.js for a fast, single-page application experience
          - Styled using CSS-in-JS (styled-components) for modular and maintainable styling
          - Implemented responsive design principles for optimal viewing on all device sizes
          - Utilized React Hooks for efficient state management and side effects
          - Incorporated animations and transitions for enhanced user experience
          - Implemented lazy loading for improved performance
          - Integrated with a backend API for form submissions and dynamic content loading
          - Ensured accessibility compliance with WCAG guidelines
          - Optimized for search engines with proper meta tags and semantic HTML

          This project not only serves as a portfolio but also as a testament to my proficiency in React and modern web development practices.`,
          liveLink: 'https://bradleymatera.github.io/reactapptest/',
          githubLink: 'https://github.com/BradleyMatera/reactapptest',
        },
        {
          title: 'Interactive Pokedex',
          description: 'A comprehensive and engaging Pokedex application that brings the world of Pokémon to life through interactive features and rich data visualization.',
          details: `This project is an immersive Pokedex application that leverages multiple Pokémon APIs to provide a rich, interactive experience for Pokémon enthusiasts. Built with HTML, Tailwind CSS, and JavaScript, it offers a blend of functionality and aesthetic appeal.

          Key Features:
          - Advanced Search Functionality: Users can search for Pokémon by name, type, or ID number, with autocomplete suggestions for a smoother experience.
          - Comprehensive Pokémon Details: Each Pokémon entry includes detailed information such as:
            • Base stats with visual representations
            • Abilities and their effects
            • Type advantages and disadvantages
            • Height, weight, and other physical characteristics
            • Habitat and ecology information
          - Dynamic Evolution Chain Visualization: Interactive diagram showing the evolution stages of each Pokémon, including branch evolutions and evolution methods.
          - Pokémon Trading Card Game Integration: Displays related Pokémon Trading Card Game cards, including:
            • Card images and rarity information
            • Set information and release dates
            • Market prices and availability (where applicable)
          - Interactive Pokémon Quiz: A challenging quiz feature that tests users' knowledge about Pokémon types, abilities, and evolutions. Includes:
            • Multiple difficulty levels
            • Timed quizzes for added challenge
            • Leaderboard functionality
          - Responsive Design: Fully optimized for seamless experience across desktop, tablet, and mobile devices.
          - Offline Functionality: Implements service workers for basic offline access to previously viewed Pokémon data.
          - Dark Mode: User-toggleable dark mode for comfortable viewing in low-light conditions.
          - Accessibility Features: Implemented ARIA attributes and ensured keyboard navigation for improved accessibility.

          Technical Highlights:
          - Efficient API integration with error handling and loading states
          - Local storage utilization for saving user preferences and quiz scores
          - Modular JavaScript architecture for maintainability and scalability
          - CSS animations for smooth transitions and engaging user interface
          - Lazy loading of images and data for optimized performance

          This Pokedex application stands out as a comprehensive tool for Pokémon fans, offering both depth of information and an engaging, interactive user experience.`,
          liveLink: 'https://bradleymatera.github.io/TESTAPP/',
          githubLink: 'https://github.com/BradleyMatera/TESTAPP',
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <ProjectsWrapper>
        <h2>Projects</h2>
        <ProjectList>
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard title={project.title} description={project.description} />
              <ProjectDetails>
                <p>{project.details}</p>
                <p>
                  <strong>Live Link:</strong> <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.liveLink}</ProjectLink>
                </p>
                <p>
                  <strong>GitHub Link:</strong> <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</ProjectLink>
                </p>
              </ProjectDetails>
            </div>
          ))}
        </ProjectList>
      </ProjectsWrapper>
    );
  }
}

export default ProjectsContainer;