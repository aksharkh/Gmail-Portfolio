import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; 
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function ViewProject2() {
  // const { emailId } = useParams();
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
          <strong>Social Media Platform</strong>
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
            alt="Social Media Project"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>Social Media Platform</strong>
          </Typography>
        </Box>
        <Box>
          <Star style={{ cursor: 'pointer', marginRight: '10px' }} />
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>An Interactive Social Media Application</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Social Media Platform</strong> is a full-featured web application designed to foster social connections and interactions. 
          Users can engage with posts through likes and comments, manage their profiles, and connect with others through friend requests.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - A feed where users can like and comment on posts.
          <br />
          - Profile management, allowing users to update their information.
          <br />
          - Friend requests to connect with other users and build a social network.
          <br />
          - The ability to upload photos in posts, enhancing the sharing experience.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my ability to build interactive and user-centric applications. It highlights my skills in frontend and 
          backend development, database management, and creating seamless user experiences.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/social-media" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Social Media Platform
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject2;
