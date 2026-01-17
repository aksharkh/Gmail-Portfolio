import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Company from  '../assets/company.png';

function ViewWork() {
  // const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/work'); 
  };
  return (
    <Box>
      <Box>
        <ArrowBack style={{ marginLeft: '20px',cursor:'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px',cursor:'pointer' }} />
      </Box>
      <Box>
        <Typography variant="h5" align="center"><strong>Varcons Technology Pvt Ltd</strong></Typography>
      </Box>
      <Box 
        style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px', }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Company} alt="img"style={{cursor: 'pointer',borderRadius: '50%',width: '50px',height: '50px',marginRight: '15px',}}/>
          <Typography><strong>Internship</strong></Typography>
        </Box>
        <Box>
        <Star style={{ cursor: 'pointer' ,marginRight:'10px'}} />
        <InsertEmoticon style={{cursor:'pointer'}}/>
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px',paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>Full Stack Web Development</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          During my internship at <strong>Varcons Technology Pvt Ltd</strong>, I had the opportunity to work on building templates for a 
          <strong> Smart Home Control Dashboard</strong>. This project involved developing a full-stack application that integrates user-friendly 
          frontends with robust backend functionality.
        </Typography>
        <Typography variant="body1" paragraph>
          As part of the project, I:
        </Typography>
        <Typography variant="body1" paragraph>
          - Designed and implemented responsive frontend components using <strong>HTML, CSS, and JavaScript</strong>.
          <br />
          - Utilized APIs to display real-time weather, device battery, and time information.
          <br />
          - Gained experience in full-stack web development by integrating backend logic to complement the user interface.
        </Typography>
        <Typography variant="body1" paragraph>
          This internship enhanced my skills in both frontend and backend development and provided valuable hands-on experience in creating 
          practical and innovative solutions.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Check out my work here:{' '}
          <a
            href="https://aksharkh.github.io/Smart-home-dashboard-/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2',textDecoration: 'underline',fontWeight: 'bold' }}
          >
            Smart Home Dashboard
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewWork;
