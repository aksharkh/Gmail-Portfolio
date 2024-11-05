import { Close, DeleteOutline} from '@mui/icons-material'
import { Box, Button, Dialog, InputBase, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Header = styled(Box)({
    display: 'flex',
    justifyContent:'space-between',
    padding:'15px 20px',
    background: '#283747',
    '& > p':{
        fontSize:20,
        fontWeight: 600
    }
})

const Subject =styled(Box)({
    padding:'0 20px',
    display:'flex',
    flexDirection: 'column',
    '& > div':{
        fontSize:16,
        borderBottom: '1px solid #F5F5F5',
        marginTop:'10px'
    }
})

const Footer = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 30px'
})
const Sendbutton =styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    minWidth:'100px',
    borderRadius:'20px',
    textTransform:'none',
    fontWeight:'500'
})


const dialogStyle = {
    height: '90%',
    width: '80%',
    maxHeight:'100%',
    maxWidth:'100%',
    borderRadius:'10px'
}

function ComposeMail({openDialog, setopenDialog}) {
    const [data, setData] = useState({});
    const config ={
        Host : "smtp.elasticemail.com",
        Username : "aksharkh04@gmail.com",
        Password : "637A8EB6EED12B3D7E51E01D139F95AAC8E5",
        Port : 2525
    }

const closeMail = (e) =>{
    e.preventDefault();
    setopenDialog(false);
};

const sendMail = (e) =>{
    e.preventDefault();
    if(window.Email){

        const fullBody = `From Details:\n${data.from}\n\nMessage:\n${data.body}`;
    window.Email.send({
        ...config,
        To : 'aksharkh04@gmail.com',
        From : 'aksharkh04@gmail.com', 
        Subject : data.subject,
        Body : fullBody
    }).then(
      message => alert(message)
    );
}
    setopenDialog(false);
}

const onValuechange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
    console.log('hello');
}

  return (
    
        <Dialog
        open={openDialog}
        PaperProps={{sx: dialogStyle}}
        >
           <Header>
            <Typography>Contact</Typography>
            <Close fontSize='medium' cursor='pointer' onClick={(e) => closeMail(e)} />
           </Header>
           <Subject>
            <Typography fontSize='medium' marginTop='10px'>To : aksharkh04@gmail.com</Typography>
            <InputBase placeholder='From(email)' name='from' onChange={(e) => onValuechange(e)}/>
            <InputBase placeholder='subject' name='subject' onChange={(e) => onValuechange(e)}/>
           </Subject>
           <TextField
           multiline
           rows={18}
           sx={{'& .MuiOutlinedInput-notchedOutline': {border:'none'} }} placeholder='body'onChange={(e) => onValuechange(e)} name='body'/>
           <Footer>
            <Sendbutton onClick={(e) => sendMail(e)}>Send</Sendbutton>
            <DeleteOutline cursor='pointer' />
           </Footer>
        </Dialog>
  )
}

export default ComposeMail