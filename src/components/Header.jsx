import React, { useState } from 'react'
import { AppBar, Toolbar,styled,InputBase, Box} from '@mui/material'
import {AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, SettingsOutlined} from '@mui/icons-material'
import { gmaillogo } from '../constants/constant'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Profile from './Profile';
import Image from '../assets/img.jpg'


const StyledAppBar = styled(AppBar)({
        background :'#F5F5F5',
        boxShadow : 'none'
})

const Searchdraw = styled(Box)({
    background : '#f2f6fc',
    marginLeft : 80,
    borderRadius : 80,
    minWidth : 690,
    maxWidth : 720,
    height : 48,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : '0 20px',
    '& > div':{
      width:'100%',
      padding:'0 20px'
    }

})
const Optionmenu =styled(Box)({
  width:'100%',
  display: 'flex',
  justifyContent: 'end',
 '& > svg':{
    marginLeft: 30
 }

})

function Header({toggleDrawer}) {

  const [openpDialog,setpDialog] = useState(false);

const onpclick = () => {
  setpDialog(true);
}


  return (
    <div>
        <StyledAppBar position='static'>
            <Toolbar>
            <MenuIcon color='action' cursor='pointer' onClick={toggleDrawer}/>
            <img src={gmaillogo} alt='logo' style={{height:40,marginLeft:30}} />
            <Searchdraw>
            <SearchIcon color='action'cursor='pointer' />
            <InputBase placeholder='Search mail'/>
            <TuneIcon color ='action' cursor='pointer'/>
            </Searchdraw>
            <Optionmenu>
              <HelpOutlineOutlined color='action'cursor='pointer' />
              <SettingsOutlined color='action'cursor='pointer'/>
              <AppsOutlined color='action'cursor='pointer'/>
              <img src={Image} alt="Profile" style={{ cursor: 'pointer', borderRadius: '50%', width: '30px', height: '30px', marginLeft: '15px' }} onClick={() => onpclick()} />

            </Optionmenu>
            <Profile openpDialog={openpDialog} setpDialog={setpDialog}/>
            </Toolbar>
        </StyledAppBar>
    </div>
  )
}

export default Header