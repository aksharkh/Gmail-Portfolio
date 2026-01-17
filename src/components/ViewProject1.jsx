import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; 
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function ViewProject1() {
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
          <strong>EduQuest: An AI-Powered Educational Platform</strong>
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
            alt="EduQuest"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>EduQuest Project</strong>
          </Typography>
        </Box>
        <Box>
          <Star style={{ cursor: 'pointer', marginRight: '10px' }} />
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>An Educational Platform for Primary Government Schools</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>EduQuest Project</strong> is a platform designed specifically for primary government school teachers and students to 
          enhance their learning experience. The platform allows teachers to create and manage <strong>MCQ-based tests</strong>, and students 
          can take these tests seamlessly. It also includes advanced AI-powered proctoring to ensure a fair testing environment.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - Teachers can create tests by adding questions and answers.
          <br />
          - AI proctoring powered by <strong>YOLO object detection</strong> and <strong>TensorFlow</strong> to detect malpractice, such as:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;• Multiple face detection.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;• Phone detection.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;• No face detection.
          <br />
          - Comprehensive malpractice reports are generated for teachers, providing detailed insights into student behavior during the tests.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates the integration of AI into education, showcasing my ability to work with machine learning models and apply 
          them in real-world scenarios. The combination of technical innovation and educational impact makes this project truly unique.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/eduquest" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            EduQuest Project
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject1;
