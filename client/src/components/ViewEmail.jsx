import { ArrowBack, Delete, InsertEmoticon, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ViewEmail() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/emails/inbox/primary'); // Navigate back to the "Primary" emails section
  };
  return (
    <Box>
      <Box>
        <ArrowBack  style={{ marginLeft: '20px',cursor:'pointer' }} onClick={handleBackClick} />
        <Delete style={{ marginLeft: '20px',cursor:'pointer' }} />
      </Box>
      <Box>
        <Typography style={{ marginLeft: '50%' }}>hello</Typography>
      </Box>
      <Box 
        style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between', padding: '10px 20px', }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Image} alt="img"style={{cursor: 'pointer',borderRadius: '50%',width: '50px',height: '50px',marginRight: '15px',}}/>
          <Typography>About</Typography>
        </Box>
        <Box>
        <Star style={{ cursor: 'pointer' ,marginRight:'10px'}} />
        <InsertEmoticon style={{cursor:'pointer'}}/>
        </Box>
      </Box>
      <Box style={{ padding: '20px' }}>
        <Typography variant="body1" >
          This is a sample paragraph. You can add as much content as needed here. 
          The `Typography` component with `variant="body1"` makes the text look like a paragraph, 
          and you can use the `paragraph` prop to add space below the paragraph.
        </Typography>
        <Typography variant="body1">
          You can continue adding more content here. Just make sure to structure your paragraph properly 
          and style it as needed.
        </Typography>
      </Box>
    </Box>
  );
}



export default ViewEmail;
