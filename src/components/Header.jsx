import React, { useState } from 'react';
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, SettingsOutlined } from '@mui/icons-material';
import { gmaillogo } from '../constants/constant';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Profile from './Profile';
import Image from '../assets/img.jpg';

const StyledAppBar = styled(AppBar)({
  background: '#F5F5F5',
  boxShadow: 'none',
});

const Searchdraw = styled(Box)(({ theme }) => ({
  background: '#f2f6fc',
  borderRadius: 80,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
  flexGrow: 1, // Allows it to take available space

  '& > div': {
    width: '100%',
    padding: '0 10px',
  },

  // Responsive Styles
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    width: '100%', // Full width on small screens
  },
}));

const Optionmenu = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 15, // Add spacing between icons
  flexShrink: 0, // Prevents shrinking

  '& > svg': {
    cursor: 'pointer',
  },

  '& img': {
    cursor: 'pointer',
    borderRadius: '50%',
    width: 30,
    height: 30,
  },
});

const Logo = styled('img')(({ theme }) => ({
  height: 40,
  marginLeft: 30,

  [theme.breakpoints.down('md')]: {
    marginLeft: 10,
    height: 30, // Reduce size on mobile
  },
}));

function Header({ toggleDrawer }) {
  const [openpDialog, setpDialog] = useState(false);

  const onpclick = () => {
    setpDialog(true);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <MenuIcon color="action" onClick={toggleDrawer} sx={{ cursor: 'pointer' }} />
          <Logo src={gmaillogo} alt="logo" />
        </Box>

        <Searchdraw>
          <SearchIcon color="action" />
          <InputBase placeholder="Search mail" sx={{ flex: 1 }} />
          <TuneIcon color="action" />
        </Searchdraw>

        <Optionmenu>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <img src={Image} alt="Profile" onClick={onpclick} />
        </Optionmenu>
      </Toolbar>
      <Profile openpDialog={openpDialog} setpDialog={setpDialog} />
    </StyledAppBar>
  );
}

export default Header;
