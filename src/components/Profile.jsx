import { Box, Dialog, styled, Typography } from '@mui/material';
import React from 'react';
import { Close, MoreVert } from '@mui/icons-material';
import Image from '../assets/img.jpg';

const profiledailog = {
  width: '90%',
  maxWidth: 400,
  borderRadius: '20px',
};

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px',
});

const Ppic = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  '& img': {
    width: 150,
    height: 150,
    borderRadius: '50%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 120,
      height: 120,
    },
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 0',
  gap: '8px',
  '& .MuiTypography-root': {
    textAlign: 'center',
  },
}));

function Profile({ openpDialog, setpDialog }) {
  const closeP = () => {
    setpDialog(false);
  };

  return (
    <Dialog
      open={openpDialog}
      onClose={closeP}
      PaperProps={{ sx: profiledailog }}
    >
      <Header>
        <MoreVert fontSize="medium" sx={{ cursor: 'pointer' }} />
        <Close fontSize="medium" sx={{ cursor: 'pointer' }} onClick={closeP} />
      </Header>
      <Ppic>
        <img src={Image} alt="Profile pic" />
      </Ppic>
      <Footer>
        <Typography variant="h6" fontWeight={600}>AKSHAR K H</Typography>
        <Typography variant="body2">Email: aksharkh04@gmail.com</Typography>
        <Typography variant="body2">Phone: 9353443100</Typography>
      </Footer>
    </Dialog>
  );
}

export default Profile;
