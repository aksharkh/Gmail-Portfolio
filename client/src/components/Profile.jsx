import { Box, Dialog,styled, Typography } from '@mui/material'
import React from 'react'
import { Close, MoreVert } from '@mui/icons-material'
import Image from '../assets/img.jpg'
const profiledailog ={
    width:'25%',
    height:'60%',
    maxHeight:'100%',
    borderRadius:'20px'
}

const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'20px 20px'
})
const Ppic = styled(Box)({
    display:'flex',
    justifyContent:'center',
    marginTop:'30px'
})
const Footer =styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'30px 0',
    gap:'10px'
})

function Profile({openpDialog, setpDialog}) {
    const closeP = () =>{
        setpDialog(false);
    }
  return (
    <div>
        <Dialog
        open={openpDialog}
        PaperProps={{sx: profiledailog}}>
            <Header>
                <MoreVert fontSize='medium' cursor='pointer'/>
                <Close fontSize='medium' cursor='pointer' onClick={() => closeP()}/>
            </Header>
            <Ppic>
            <img src={Image}alt="Profile pic" style={{width: '200px', height: '200px', borderRadius: '50%', objectfit: 'cover', justifyContent:'center'}} />
            </Ppic>
            <Footer>
                <Typography fontSize='Large' fontWeight='600'>AKSHAR K H</Typography>
                <Typography fontSize='medium'>Email : aksharkh04@gmail.com</Typography>
            </Footer>
        </Dialog>
    </div>
  )
}

export default Profile