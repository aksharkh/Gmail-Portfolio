import React from 'react';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';

function Sidebar({ openDrawer }) {
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
          marginTop: '64px',
          width: 250,
          background: '#F5F5F5',
          borderRight: 'none',
          height: 'calc(100vh - 64px)',
          [theme => theme.breakpoints.down('sm')]: {
            width: 200,
          },
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
}

export default Sidebar;