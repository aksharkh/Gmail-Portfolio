import { StarOutlined } from '@mui/icons-material'
import { Checkbox, Box, styled, Typography } from '@mui/material'
import React from 'react'

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background : '#f2f6fc',
    cursor: 'pointer',
    '& > div':{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px'
    }
})

function Email() {
  return (
    <Wrapper>
        <Checkbox />
        <StarOutlined />
        <Box>
        <Typography>hello</Typography>
        <Typography>hi</Typography>
        </Box>
    </Wrapper>
  )
}

export default Email