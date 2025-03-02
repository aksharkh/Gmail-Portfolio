import { LabelImportant, StarOutline } from '@mui/icons-material';
import { Checkbox, Box, styled, Typography } from '@mui/material';
import React from 'react';
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

function Email() {
  const navigate = useNavigate(); 

  const emails = [
    { id: 1, subject: 'About Me', content: 'A developer, creator, and lifelong learner.', time: '01:15 PM' },
    { id: 2, subject: 'Resume', content: 'Comprehensive list of my work and achievements', time: '11:30 AM' },
    { id: 3, subject: 'Education', content: 'My Education Journey', time: '09:45 AM' },
  ];

  // Handle email click by navigating to the email detail route
  const handleEmailClick = (emailId) => {
    if (emailId === 2) {
      window.open('https://drive.google.com/file/d/1Nr603HNlQhDtH66xDouqONO6iZcgCzLZ/view', '_blank');  // Open the drive link in a new tab
    } else {
      navigate(`/emails/inbox/primary/${emailId}`);  // Navigate to the email detail view
    } 
  };

  return (
    <Box>
      {emails.map((email) => (
        <Wrapper key={email.id}>
          <Checkbox />
          <StarOutline />
          <LabelImportant style={{ marginLeft: '10px' }} />
          <Box
            onClick={() => handleEmailClick(email.id)}  // Use navigate here
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

export default Email;
