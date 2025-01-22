import { ArrowBack, Delete, InsertEmoticon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewProject5() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/project'); 
  };

  return (
    <Box>
      <Box>
        <ArrowBack style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px', cursor: 'pointer' }} />
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          <strong>Real-Time Chat System (DBMS Project)</strong>
        </Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
        }}
      >
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Image}
            alt="Chat Project"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>Real-Time Chat System</strong>
          </Typography>
        </Box>
        <Box>
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>A DBMS-Based Real-Time Chat System Using MySQL</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Real-Time Chat System</strong> is a <strong>DBMS project</strong> developed as part of my college course. The system allows users to 
          communicate in real-time by sending messages to each other, with the application connected to a <strong>MySQL Workbench</strong>database via 
          <strong>XAMPP</strong>. The database uses a relational model to manage user and message data, ensuring a structured and scalable solution.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>XAMPP</strong> used to connect the <strong>MySQL Workbench</strong> to the application for seamless communication between frontend and backend.
          <br />
          - Each user is assigned a <strong>unique ID</strong> for tracking user information and messages.
          <br />
          - Messages sent by users are stored in the database, with a <strong>relational model</strong> used to associate each message with the sender.
          <br />
          - <strong>Online status</strong> of users is displayed, indicating whether a user is active or offline.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my ability to build a real-time chat application with a relational database, manage <strong>user authentication</strong>, 
          and implement online status tracking. It also showcases how to use XAMPP and MySQL Workbench to connect a database to a web application.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/real-time-chat" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Real-Time Chat System
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject5;
