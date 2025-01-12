import { LabelImportant, StarOutlined } from '@mui/icons-material'
import { Checkbox, Box, styled, Typography } from '@mui/material'
import React from 'react'

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background : '#f2f6fc',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #d3d3d3',
    transition: 'transform 0.3s, box-shadow 0.3s', 
    '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    transform: 'scale(1.02)', 
  },
    '& > div':{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px'
    }
})

function Work() {
  return (
    <Box>
    <Wrapper>
        <Checkbox />
        <StarOutlined />
        <LabelImportant style={{marginLeft:'10px'}} />
        <Box>
        <Typography>hello</Typography>
        <Typography style={{marginLeft:'300px'}}>hi</Typography>
        </Box>
    </Wrapper>
    <Wrapper>
        <Checkbox />
        <StarOutlined />
        <LabelImportant style={{marginLeft:'10px'}} />
        <Box>
        <Typography>hello</Typography>
        <Typography style={{marginLeft:'300px'}}>hi</Typography>
        </Box>
    </Wrapper>
    </Box>
  )
}

export default Work