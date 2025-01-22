import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Box, Button, Checkbox, List, styled } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { buttonData } from './config/buttonconfig';
import { useOutletContext } from 'react-router-dom';

const Wrapperprimary = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid lightgray',
  '& > button': {
    minWidth: 300,
  },
});

function Emails() {
  const {openDrawer} = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.split('/').pop();

  const handleButtonClick = (path) => {
    navigate(`/emails/inbox/${path}`); // Navigate to the new URL
  };
  return (
    <Box style={openDrawer ? {marginLeft: 250, width:'calc(100% - 250px)'} : {width:'100%'}}>
      {/* Top Actions */}
      <Box
        style={{
          padding: '2px 10px 0 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <DeleteOutline style={{cursor:'pointer'}}/>
      </Box>

      {/* Button Navigation */}
      <Wrapperprimary>
        {buttonData.map((button, index) => (
          <Button
            key={button.name}
            onClick={() => handleButtonClick(button.path)}
            sx={{
              height: '60px',
              color: 'black',
              fontSize: 'medium',
              textTransform: 'none',
              border: 'none',
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
