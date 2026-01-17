import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function ViewProject() {
  // const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/project'); 
  };
  return (
    <Box>
      <Box>
        <ArrowBack style={{ marginLeft: '20px',cursor:'pointer' }} onClick={handleBackClick}/>
        <Delete style={{ marginLeft: '20px',cursor:'pointer' }} />
      </Box>
      <Box>
        <Typography variant="h5" align="center"><strong>Smart Home Control Dashboard</strong></Typography>
      </Box>
      <Box 
        style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px', }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Image} alt="img"style={{cursor: 'pointer',borderRadius: '50%',width: '50px',height: '50px',marginRight: '15px',}}/>
          <Typography><strong>Frontend</strong></Typography>
        </Box>
        <Box>
        <Star style={{ cursor: 'pointer' ,marginRight:'10px'}} />
        <InsertEmoticon style={{cursor:'pointer'}}/>
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px',paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>A Real-Time Frontend Dashboard</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Smart Home Contol Dashboard</strong> is a project designed to create an interactive and responsive interface for monitoring 
          and controlling smart home devices. It showcases real-time data like weather, time, and battery information, making it a convenient tool for users.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - Real-time weather updates using APIs.
          <br />
          - Displays current time and device battery percentage dynamically.
          <br />
          - Built with <strong>HTML, CSS, and JavaScript</strong>, ensuring responsiveness and seamless user experience.
        </Typography>
        <Typography variant="body1" paragraph>
          This project highlights my ability to integrate APIs, implement dynamic frontends, and design user-friendly interfaces. It also reflects 
          my skills in frontend development and real-world problem-solving.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the live project here:{' '}
          <a
            href="https://aksharkh.github.io/Smart-home-dashboard-/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2',textDecoration: 'underline',fontWeight: 'bold' }}
          >
            Smart Home Control Dashboard
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject;
