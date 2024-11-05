import React from 'react'
import { AppBar, Toolbar,styled,InputBase, Box} from '@mui/material'
import {AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, SettingsOutlined} from '@mui/icons-material'
import { gmaillogo } from '../constants/constant'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const StyledAppBar = styled(AppBar)({
        background :'#F5F5F5',
        boxShadow : 'none'
})

const Searchdraw = styled(Box)({
    background : '#283747',
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
  return (
    <div>
        <StyledAppBar position='static'>
            <Toolbar>
            <MenuIcon color='action' cursor='pointer' onClick={toggleDrawer}/>
            <img src={gmaillogo} alt='logo' style={{height:40,marginLeft:30}} />
            <Searchdraw>
            <SearchIcon color='action' />
            <InputBase placeholder='Search mail'/>
            <TuneIcon color ='action' />
            </Searchdraw>
            <Optionmenu>
              <HelpOutlineOutlined color='action' />
              <SettingsOutlined color='action'/>
              <AppsOutlined color='action'/>
              <AccountCircleOutlined color='action'/>

            </Optionmenu>

            </Toolbar>
        </StyledAppBar>
    </div>
  )
}

export default Header