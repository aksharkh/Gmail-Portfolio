import { LabelImportant, StarOutlined } from '@mui/icons-material';
import { Checkbox, Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import ViewEmail from './ViewEmail';
import ViewEmail1 from './ViewEmail1';  
import ViewEmail2 from './ViewEmail2';  

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

function Email() {
  const [activeEmail, setActiveEmail] = useState(null);

  const emails = [
    { id: 1, subject: 'About Me', content: 'This is the content of email 1' },
    { id: 2, subject: 'Email 2', content: 'This is the content of email 2' },
    { id: 3, subject: 'Email 3', content: 'This is the content of email 3' },
  ];

  const handleBoxClick = (emailId) => {
    setActiveEmail(emailId);
  };
  if (activeEmail === 1) {
    return <ViewEmail onClose={() => setActiveEmail(null)} />;
  }

  if (activeEmail === 2) {
    return <ViewEmail1 onClose={() => setActiveEmail(null)} />;
  }

  if (activeEmail === 3) {
    return <ViewEmail2 onClose={() => setActiveEmail(null)} />;
  }

  return (
    <Box>
      {emails.map((email) => (
        <Wrapper key={email.id}>
          <Checkbox />
          <StarOutlined />
          <LabelImportant style={{ marginLeft: '10px' }} />
          <Box
            onClick={() => handleBoxClick(email.id)}
            style={{ cursor: 'pointer' }}
          >
            <Typography>{email.subject}</Typography>
            <Typography style={{ marginLeft: '300px' }}>{email.content}</Typography>
          </Box>
        </Wrapper>
      ))}
    </Box>
  );
}

export default Email;
