import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

function Main() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDrawer, setOpenDrawer] = useState(!isMobile);

  // Auto-toggle drawer based on screen size
  useEffect(() => {
    setOpenDrawer(!isMobile);
  }, [isMobile]);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Outlet context={{ openDrawer }} />
    </div>
  );
}

export default Main;
