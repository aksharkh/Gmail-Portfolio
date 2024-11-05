import React, { useState } from 'react'
import { Box , Button ,List,ListItem,styled} from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'
import { SIDEBAR_DATA } from './config/sidebar.config'
import ComposeMail from './ComposeMail'


const Container = styled(Box)({
    padding:8,
    '& > ul':{
        padding:'20px 0 0 10px',
        fontSize:15,
        fontWeight:500,
        cursor:'pointer'
    },
    '& > ul> li > svg':{
        marginRight:20
    }

})

const ComposedButton = styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:16,
    borderRadius:16,
    textTransform:'none',
    minWidth:140,
    
})

function SidebarContent() {
    const[openDialog, setopenDialog] = useState(false);

    const onComposeclick = () =>{
        setopenDialog(true);
    }


  return (
    <Container>
        <ComposedButton onClick={() => onComposeclick()}>
        <CreateOutlined/>Contact
        </ComposedButton>
        
        <List>
            {
                SIDEBAR_DATA.map(data => (
                    <ListItem>
                       <data.icon fontSize='medium'/> {data.title}
                    </ListItem>
                ))
            }
        </List>
        <ComposeMail openDialog={openDialog} setopenDialog={setopenDialog}/>
    </Container>
  )
}

export default SidebarContent