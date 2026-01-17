import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


function ViewEmail() {
  // const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/primary'); 
  };
  return (
    <Box>
      <Box>
        <ArrowBack  style={{ marginLeft: '20px',cursor:'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px',cursor:'pointer' }} />
      </Box>
      <Box>
        <Typography variant="h5" align="center"><strong>A developer, creator, and lifelong learner.</strong></Typography>
      </Box>
      <Box 
        style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px', }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Image} alt="img"style={{cursor: 'pointer',borderRadius: '50%',width: '50px',height: '50px',marginRight: '15px',}}/>
          <Typography><strong>About Me</strong></Typography>
        </Box>
        <Box>
        <Star style={{ cursor: 'pointer' ,marginRight:'10px'}} />
        <InsertEmoticon style={{cursor:'pointer'}}/>
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px',paddingRight: '50px' }}>
      <Typography variant="body1" paragraph>
          Hello! I'm <strong>Akshar K H</strong>, a passionate <strong>Full Stack Developer</strong> currently pursuing my undergraduate degree at 
          <strong> Dayananda Sagar Academy of Technology and Management (DSATM)</strong>. With a strong foundation in programming and a keen interest in 
          building scalable and user-friendly applications, I strive to combine creativity with technical expertise in every project I undertake.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, I have developed a diverse skill set that includes proficiency in <strong>C, Java, Python, HTML, CSS, JavaScript</strong> and frameworks like 
          <strong> React.js, Node.js, Express.js</strong>, and <strong>Django</strong>. My backend expertise spans working with both relational and non-relational databases, such as 
          <strong> MongoDB</strong> and <strong>SQL</strong>. I’m also exploring areas like <strong>ethical hacking</strong>, <strong>reverse engineering</strong>, and secure coding practices, contributing to my foundational knowledge of cybersecurity.
        </Typography>
        
        <Typography variant="body1" paragraph>
          During my internship at <strong>Varcons Technology Pvt Ltd</strong>, I developed <strong>templates for a smart home control dashboard</strong>, gaining hands-on experience in full-stack web development and collaborative teamwork.
        </Typography>
        <Typography variant="body1" paragraph>
          Outside of coding, I enjoy exploring new technologies, enhancing my problem-solving skills, and staying updated with trends in <strong>cloud computing</strong>, <strong>networking</strong>, and 
          <strong> software development lifecycle (SDLC)</strong>.
        </Typography>
        <Typography variant="body1">
          Feel free to connect with me via <a href="https://github.com/aksharkh" target="_blank" rel="noopener noreferrer">GitHub</a> or drop me an email at 
          <strong> aksharkh04@gmail.com</strong>. Let’s create something amazing together!
        </Typography>
        
        
      </Box>
    </Box>
  );
}



export default ViewEmail;
