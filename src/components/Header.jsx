import React, { useState } from 'react';
import { AppBar, Toolbar, styled, InputBase, Box, IconButton } from '@mui/material';
import { AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, SettingsOutlined } from '@mui/icons-material';
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
  borderRadius: 50,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px',
  flexGrow: 1,
  flexBasis: 'auto',

  '& > div': {
    width: '100%',
    padding: '0 6px',
  },

  [theme.breakpoints.down('sm')]: {
    height: 34,
    '& svg': { fontSize: '18px' },
    '& input': { fontSize: '0.75rem' },
  },
}));

const Optionmenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 10,
  flexShrink: 0,

  '& > svg': {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },

  '& img': {
    cursor: 'pointer',
    borderRadius: '50%',
    width: 28,
    height: 28,
    [theme.breakpoints.down('sm')]: {
      width: 24,
      height: 24,
    },
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: 36,
  marginLeft: 20,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 6,
    height: 26,
  },
}));

function Header({ toggleDrawer }) {
  const [openpDialog, setpDialog] = useState(false);

  const onpclick = () => {
    setpDialog(true);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: { xs: '50px', sm: '64px' },
          padding: { xs: '0 8px', sm: '0 16px' },
        }}
      >
        {/* Left: Menu + Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          <IconButton onClick={toggleDrawer} size="small">
            <MenuIcon color="action" fontSize="small" />
          </IconButton>
          <Logo src={gmaillogo} alt="logo" />
        </Box>

        {/* Search */}
        <Box sx={{ flexGrow: 1, mx: { xs: 1, sm: 2 } }}>
          <Searchdraw>
            <SearchIcon color="action" />
            <InputBase placeholder="Search mail" sx={{ flex: 1, minWidth: 60 }} />
            <TuneIcon color="action" />
          </Searchdraw>
        </Box>

        {/* Right: Icons */}
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
