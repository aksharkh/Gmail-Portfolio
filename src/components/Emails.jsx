import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Box, Button, Checkbox, List, styled } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { buttonData } from './config/buttonconfig';
import { useOutletContext } from 'react-router-dom';

const Wrapperprimary = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid lightgray',
  overflowX: 'auto', // Allow horizontal scrolling if needed
  whiteSpace: 'nowrap', // Prevents buttons from stacking unnecessarily
  paddingBottom: 5,
  '& > button': {
    flexGrow: 1, // Allows buttons to be flexible inside the container
    minWidth: '120px', // Minimum size but flexible
    maxWidth: '200px', // Prevents excessive stretching
    textAlign: 'center',borderTop: 'none !important',
    borderLeft: 'none !important',
    borderRight: 'none !important',
    fontSize: 'medium',
    height: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap', // Allows buttons to wrap instead of overflow
    justifyContent: 'center',
    '& > button': {
      minWidth: '80px',
      fontSize: '12px',
      padding: '8px',
    },
  },
}));

function Emails() {
  const { openDrawer } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.split('/').pop();

  const handleButtonClick = (path) => {
    navigate(`/emails/inbox/${path}`);
  };

  return (
    <Box
      style={openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' }}
    >
      {/* Top Actions */}
      <Box
        sx={{
          padding: '2px 10px 0 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <DeleteOutline sx={{ cursor: 'pointer' }} />
      </Box>

      {/* Button Navigation */}
      <Wrapperprimary>
        {buttonData.map((button) => (
          <Button
            key={button.name}
            onClick={() => handleButtonClick(button.path)}
            sx={{
              height: '50px',
              color: 'black',
              fontSize: '14px',
              textTransform: 'none',
              borderRadius: 0,
              backgroundColor: activeTab === button.path ? 'lightgray' : 'white',
              borderBottom: activeTab === button.path ? '2px solid black' : 'none',
              '&:hover': {
                backgroundColor: activeTab === button.path ? 'gray' : 'lightgray',
              },
            }}
            variant={activeTab === button.path ? 'contained' : 'outlined'}
          >
            {button.icon}
            {button.title}
          </Button>
        ))}
      </Wrapperprimary>

      {/* Render Child Components */}
      <List>
        <Outlet />
      </List>
    </Box>
  );
}

export default Emails;
