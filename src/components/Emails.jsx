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
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  paddingBottom: 5,
  '& > button': {
    flexGrow: 1,
    minWidth: '120px',
    maxWidth: '200px',
    textAlign: 'center',
    borderTop: 'none !important',
    borderLeft: 'none !important',
    borderRight: 'none !important',
    fontSize: 'medium',
    height: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > button': {
      minWidth: '80px',
      fontSize: '12px',
      padding: '8px',
      height: '50px',
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
      sx={{
        width: openDrawer ? { xs: '100%', sm: 'calc(100% - 250px)' } : '100%',
        marginLeft: openDrawer ? { xs: 0, sm: '250px' } : 0,
      }}
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
              height: { xs: '40px', sm: '50px' },
              color: 'black',
              fontSize: { xs: '12px', sm: '14px' },
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
