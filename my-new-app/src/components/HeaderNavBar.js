import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaHome, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Drawer, IconButton, List, ListItem, ListItemText, AppBar, Toolbar, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import anime from 'animejs/lib/anime.es.js';

const HeaderNavBarWrapper = styled(AppBar)`
  background: linear-gradient(90deg, #1c1c1c 0%, #0a0a0a 100%);
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const DrawerList = styled(List)`
  width: 250px;
  background-color: #1c1c1c;
  height: 100%;
  padding: 20px 0;
`;

const DrawerListItem = styled(ListItem)`
  &:hover {
    background-color: #fb8b24;
    transform: scale(1.05);
  }
  transition: background-color 0.3s, transform 0.3s;
`;

const DrawerListItemText = styled(ListItemText)`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
`;

const NavIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb8b24;
  font-size: 1.5rem;
  margin-right: 10px;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #fb8b24;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const HeaderNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { name: 'Home/About', path: '/', icon: <FaHome /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Skills/Experience', path: '/skills-experience', icon: <FaCode /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    anime({
      targets: '.nav-icon',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(200),
    });
    anime({
      targets: '.logo',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <HeaderNavBarWrapper position="static">
      <ToolbarWrapper>
        <IconButton onClick={toggleDrawer} style={{ color: '#fb8b24', fontSize: '1.5rem' }}>
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
        <Logo className="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Bradley Matera
        </Logo>
      </ToolbarWrapper>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <DrawerList>
          {navItems.map((item, index) => (
            <Tooltip title={item.name} arrow key={item.name}>
              <DrawerListItem button onClick={toggleDrawer} component={Link} to={item.path}>
                <NavIconWrapper className="nav-icon" key={index}>
                  {item.icon}
                </NavIconWrapper>
                <DrawerListItemText primary={item.name} />
              </DrawerListItem>
            </Tooltip>
          ))}
        </DrawerList>
      </Drawer>
    </HeaderNavBarWrapper>
  );
};

export default HeaderNavBar;