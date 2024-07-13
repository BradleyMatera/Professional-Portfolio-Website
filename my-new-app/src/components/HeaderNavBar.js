import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Drawer, IconButton, List, ListItem, ListItemText, Typography, AppBar, Toolbar } from '@mui/material';

const HeaderNavBarWrapper = styled(AppBar)`
  background: #1c1c1c;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerList = styled(List)`
  width: 250px;
  background-color: #1c1c1c;
  height: 100%;
`;

const DrawerListItem = styled(ListItem)`
  &:hover {
    background-color: #fb8b24;
  }
`;

const DrawerListItemText = styled(ListItemText)`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
`;

const HeaderNavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <HeaderNavBarWrapper position="static">
      <ToolbarWrapper>
        <IconButton onClick={toggleDrawer} style={{ color: '#fb8b24', fontSize: '1.5rem' }}>
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
        <Typography variant="h6" style={{ color: '#fb8b24' }}>
          Bradley Matera
        </Typography>
      </ToolbarWrapper>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <DrawerList>
          {navItems.map((item) => (
            <DrawerListItem 
              button 
              key={item.name} 
              onClick={toggleDrawer} 
              component="a" 
              href={item.href}
            >
              <DrawerListItemText primary={item.name} />
            </DrawerListItem>
          ))}
        </DrawerList>
      </Drawer>
    </HeaderNavBarWrapper>
  );
};

export default HeaderNavBar;