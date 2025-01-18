import { ArrowBack, Delete, InsertEmoticon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; // Replace with the actual project image
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewProject6() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/project'); // Navigate back to the projects list or inbox section
  };

  return (
    <Box>
      <Box>
        <ArrowBack style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px', cursor: 'pointer' }} />
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          <strong>Hackthon Management Dashboard</strong>
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
            alt="Event Management"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>Hackthon</strong>
          </Typography>
        </Box>
        <Box>
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>A Comprehensive Event Management Dashboard</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Hackthon Management Dashboard</strong> is a web application designed to streamline the planning, scheduling, and managing 
          of events. This dashboard allows users to create events, manage schedules, and track event participation.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Event Creation</strong>: Users can create events by providing relevant details such as the event name, date, and location.
          <br />
          - <strong>Event Scheduling</strong>: Admins can set schedules, including start times, end times, and session details.
          <br />
          - <strong>Participant Management</strong>: Users can register for events, and event organizers can track participant details.
          <br />
          - <strong>Real-Time Event Status</strong>: Participants are notified whether the event is <strong>ON</strong> or <strong>OFF</strong>. Organizers can update the status, and participants will see it in real-time.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my ability to build an intuitive dashboard that incorporates both frontend and backend functionalities. 
          It also showcases my skills in handling user management, notifications, and real-time updates for event management systems.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/Event-Management" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Event Management Dashboard
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject6;
