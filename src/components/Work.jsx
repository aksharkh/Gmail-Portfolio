import { LabelImportant, StarOutline } from '@mui/icons-material';
import { Checkbox, Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import ViewWork from './ViewWork';
import { useNavigate } from 'react-router-dom';



const Wrapper = styled(Box)({
  padding: '0 0 0 10px',
  background: '#f2f6fc',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #d3d3d3',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.02)',
  },
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
});

function Work() {
  const navigate = useNavigate(); 

  const emails = [
    { id: 1, subject: 'Internship', content: 'Varcons Technology Pvt Ltd',time: '1:15 PM' },
  ];

  const handleWorkClick = (emailId) => {
    navigate(`/emails/inbox/work/${emailId}`);  
  };

  

  return (
    <Box>
      {emails.map((email) => (
        <Wrapper key={email.id}>
          <Checkbox />
          <StarOutline />
          <LabelImportant style={{ marginLeft: '10px' }} />
          <Box
                      onClick={() => handleWorkClick(email.id)}  
                      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                      <Typography style={{ flex: 1 }}>{email.subject}</Typography>
                      <Typography style={{ flex: 2, textAlign: 'center' }}>{email.content}</Typography>
                      <Typography style={{ flex: 1, textAlign: 'right',fontSize:'small' }}>{email.time}</Typography>
                    </Box>
        </Wrapper>
      ))}
    </Box>
  );
}

export default Work;
