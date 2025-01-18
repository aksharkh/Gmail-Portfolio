import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; // Replace with the actual project image
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewProject3() {
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
          <strong>Vital: Medicine Filtering Application</strong>
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
            alt="Vital Project"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>Vital Project</strong>
          </Typography>
        </Box>
        <Box>
          <Star style={{ cursor: 'pointer', marginRight: '10px' }} />
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
      <Typography variant="h6" align="center" paragraph>
          <strong>A MERN Stack Solution for Medicine Management</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Vital Project</strong> is a web application built with the MERN stack, designed to help manage and display medicines 
          in PDF format. It caters to both adults and children, offering a user-friendly interface for browsing medicines, their details, 
          and relevant information.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - Built with the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) and <strong>Material-UI</strong> for a modern and responsive UI.
          <br />
          - <strong>Backend integration</strong> with Express.js to handle and process user requests.
          <br />
          - <strong>Python Pandas</strong> is used to process data from PDF forms, which is then sent to the backend in JSON format for easy handling.
          <br />
          - Medicines are displayed in <strong>PDF format</strong> for convenient and professional presentation.
          <br />
          - The platform is designed to support <strong>adults and children</strong> by offering tailored content.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my ability to work with the MERN stack, integrate backend and Python for data processing, and create 
          an interactive and user-friendly application. It also highlights the seamless integration of different technologies for a 
          real-world application.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/AllerMeds" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Vital Project
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject3;
