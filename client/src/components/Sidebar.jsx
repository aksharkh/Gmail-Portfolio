import { Drawer , Styled} from '@mui/material'
import React from 'react'
import SidebarContent from './SidebarContent'

function Sidebar({openDrawer}) {
  return (
    <Drawer 
    anchor='left'
    open={openDrawer}
    hideBackdrop={true}
    modalProops={{
      keepMounted : true
    }}
    variant='persistent'
    sx={{
      '& .MuiDrawer-paper':{
        marginTop: '64px',
        width: 250,
        background: '#283747',
        borderRight: 'none',
        height:'calc(100vh-64px)'
      }
    }}
    >
    <SidebarContent/>
        
    </Drawer>
  )
}

export default Sidebar