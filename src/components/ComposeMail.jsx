import { Close, DeleteOutline } from '@mui/icons-material';
import { Box, Button, Dialog, InputBase, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px 20px',
  background: '#d3e3fd',
  '& > p': {
    fontSize: 20,
    fontWeight: 600,
  },
});

const Subject = styled(Box)({
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  '& > div': {
    fontSize: 16,
    borderBottom: '1px solid #F5F5F5',
    marginTop: '10px',
  },
});

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 30px',
});

const Sendbutton = styled(Button)({
  background: '#0B57D0',
  color: '#fff',
  minWidth: '100px',
  borderRadius: '20px',
  textTransform: 'none',
  fontWeight: '500',
});

const dialogStyle = {
  width: '90%',
  maxWidth: 600,
  borderRadius: '10px',
};

function ComposeMail({ openDialog, setopenDialog }) {
  const [data, setData] = useState({});

  const config = {
    Host: 'smtp.elasticemail.com',
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeMail = (e) => {
    e.preventDefault();
    setopenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      const fullBody = `From Details:\n${data.from}\n\nMessage:\n${data.body}`;
      window.Email.send({
        ...config,
        To: 'aksharkh04@gmail.com',
        From: 'aksharkh04@gmail.com',
        Subject: data.subject,
        Body: fullBody,
      }).then((message) => alert(message));
    }
    setopenDialog(false);
  };

  const onValuechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>Contact</Typography>
        <Close fontSize="medium" sx={{ cursor: 'pointer' }} onClick={closeMail} />
      </Header>
      <Subject>
        <Typography fontSize="medium" marginTop="10px">
          To: aksharkh04@gmail.com
        </Typography>
        <InputBase placeholder="From (email)" name="from" onChange={onValuechange} />
        <InputBase placeholder="Subject" name="subject" onChange={onValuechange} />
      </Subject>
      <TextField
        multiline
        rows={8}
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, padding: '0 20px' }}
        placeholder="Body"
        onChange={onValuechange}
        name="body"
      />
      <Footer>
        <Sendbutton onClick={sendMail}>Send</Sendbutton>
        <DeleteOutline sx={{ cursor: 'pointer' }} />
      </Footer>
    </Dialog>
  );
}

export default ComposeMail;