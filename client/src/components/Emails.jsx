
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import {Box,Button, Checkbox, List, Typography, styled} from '@mui/material'
import { DeleteOutline,  Image } from '@mui/icons-material'
import Email from './Email';

const Wrapperprimary = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > button':{
    minWidth: 300,
    
  }
})

function Emails() {
  const {openDrawer} = useOutletContext();
  return (
    <Box style={openDrawer ? {marginLeft: 250, width:'cal(100%-250px)'} : {width:'100%'}}>
      <Box style = {{padding:'20px 10px 0 10px',display: 'flex', justifycontent: 'space-between', alignItems: 'center'}}>
        <Checkbox />
        <DeleteOutline />
      </Box>
      <Wrapperprimary>
        <Button style={{height: '70px'}}>
          <Image/>
          One
          </Button>
        <Button style={{height:'70px'}}>Two</Button>
        <Button style={{height:'70px',backgroundColor: ''}}>Three</Button>

      </Wrapperprimary>
      <List>
        <Email />
      </List>
    </Box>
  )
}

export default Emails