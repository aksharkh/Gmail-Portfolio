import { LabelImportant, StarOutline } from '@mui/icons-material';
import { Checkbox, Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import ViewProject from './ViewProject';
import ViewProject1 from './ViewProject1';
import ViewProject2 from './ViewProject2';
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

function Project() {
  const navigate = useNavigate();  // Initialize navigate

  const emails = [
    { id: 1, subject: 'Fronted', content: 'Smart Home Control Dashboard', time: '10:11 PM' },
    { id: 2, subject: 'MERN stack', content: 'EduQuest: An AI-Powered Educational Platform', time: '08:48 PM' },
    { id: 3, subject: 'MERN stack', content: 'Social Media Platform', time: '06:05 PM' },
    { id: 4, subject: 'MERN stack', content: 'Vital: Medicine Filtering Application', time: '03:00 PM' },
    { id: 5, subject: 'Django', content: 'Word Building Game', time: '11:12 AM' },
    { id: 6, subject: 'MySQL', content: 'Real-Time Chat System', time: '09:30 AM' },
    { id: 7, subject: 'MERN stack', content: 'Hackthon Management Dashboard', time: '08:00 AM' },
  ];

  const handleProjectClick = (emailId) => {
    navigate(`/emails/inbox/project/${emailId}`);  // Navigate to the email detail view
  };

  return (
    <Box>
      {emails.map((email) => (
        <Wrapper key={email.id}>
          <Checkbox />
          <StarOutline />
          <LabelImportant style={{ marginLeft: '10px' }} />
          <Box
              onClick={() => handleProjectClick(email.id)}  // Use navigate here
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

export default Project;
