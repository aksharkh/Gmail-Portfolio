import { ArrowBack, Delete, InsertEmoticon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../assets/img.jpg'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewProject4() {
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
          <strong>Word Building Game (Django)</strong>
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
            alt="Word Building Game"
            style={{
              cursor: 'pointer',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '15px',
            }}
          />
          <Typography>
            <strong>Django</strong>
          </Typography>
        </Box>
        <Box>
          <InsertEmoticon style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
        <Typography variant="h6" align="center" paragraph>
          <strong>A Fun Word Building Game Played with the System</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          The <strong>Word Building Game</strong> is a fun and interactive game built with Django. In this game, players take turns to form words 
          where the word must begin with the last letter of the previous word. The length of the word determines the score, and the player with 
          the highest score wins.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          - Players must form a word that starts with the last character of the previous word.
          <br />
          - The score is calculated based on the length of the word.
          <br />
          - The game is played against the system, where the system also generates words.
          <br />
          - The player with the highest score at the end wins.
        </Typography>
        <Typography variant="body1" paragraph>
          This project demonstrates my ability to integrate game logic with <strong>Django</strong> and <strong>JavaScript</strong> for an interactive and engaging game 
          experience. It also showcases my skills in backend development, user interaction, and real-time gameplay.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Check out the project details here:{' '}
          <a
            href="https://github.com/aksharkh/word-building-game" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Word Building Game
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ViewProject4;
