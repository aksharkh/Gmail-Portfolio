import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewEmail2() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/primary'); // Navigate back to the "Primary" emails section
  };
  return (
    <Box>
      <Box>
        <ArrowBack style={{ marginLeft: '20px',cursor:'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px',cursor:'pointer'}} />
      </Box>
      <Box>
        <Typography variant="h5" align="center"><strong>My Education Journey</strong></Typography>
      </Box>
      <Box 
        style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px', }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Image} alt="img"style={{cursor: 'pointer',borderRadius: '50%',width: '50px',height: '50px',marginRight: '15px',}}/>
          <Typography><strong>Education</strong></Typography>
        </Box>
        <Box>
        <Star style={{ cursor: 'pointer' ,marginRight:'10px'}} />
        <InsertEmoticon style={{cursor:'pointer'}}/>
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px',paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>Current Education: Bachelor's in Engineering</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          I am currently pursuing my undergraduate degree in <strong>Information Science and Engineering (ISE)</strong> at 
          <strong> Dayananda Sagar Academy of Technology and Management (DSATM), Bangalore</strong>. I am in my 7th semester, and I am focused on building a strong foundation in various domains of computer science, including software development, data structures, algorithms, and web technologies.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Previous Education:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Pre-University Course (PUC):</strong> Completed at <strong>Excellent P U College, Moodbidre</strong> with a focus on science subjects(PCMB).
          <br />
          - <strong>High School:</strong> Completed at <strong>Jawahar Navodaya Vidyalaya (JNV), Shimoga</strong> and <strong>Hongirana School of Excellence, Sagar</strong>.
        </Typography>
        <Typography variant="body1" paragraph>
          My educational journey has instilled in me a deep passion for technology, and I am continuously seeking opportunities to expand my knowledge and skills.
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewEmail2;
