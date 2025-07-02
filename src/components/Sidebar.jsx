import React from 'react';
import { Drawer, useTheme, useMediaQuery } from '@mui/material';
import SidebarContent from './SidebarContent';

function Sidebar({ openDrawer }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          marginTop: isMobile ? '50px' : '64px', // Adjust based on AppBar height
          width: isMobile ? 200 : 250,
          background: '#F5F5F5',
          borderRight: 'none',
          height: isMobile ? 'calc(100vh - 50px)' : 'calc(100vh - 64px)',
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
}

export default Sidebar;
