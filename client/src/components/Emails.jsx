
import React, {useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import {Box,Button, Checkbox, List, Typography, styled} from '@mui/material'
import { Bookmark, DeleteOutline,  Image, PeopleAlt} from '@mui/icons-material'
import Email from './Email';
import { buttonData } from './config/buttonconfig';
import Project from './Project';
import Work from './Work';
import ViewEmail from './ViewEmail';


const Wrapperprimary = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > button':{
    minWidth: 300,
    
  }
})

function Emails() {
  const {openDrawer} = useOutletContext();
  const [activeButton, setActiveButton] = useState(null);
  const [viewEmail, setViewEmail] = useState(false);


  const handleButtonClick = (index) => {
    setActiveButton(index);
    setViewEmail(false); // Ensure the email view is closed when switching tabs
  };

  const handleBoxClick = () => {
    setViewEmail(true);
  };

  const handleBackClick = () => {
    setViewEmail(false);
  };


  const renderContent = () => {
    if (viewEmail) {
      return <ViewEmail onBackClick={handleBackClick} />;
    }
    
    switch (activeButton) {
      case 0:
        return <Email onBoxClick={handleBoxClick} />;
      case 1:
        return <Project />;
      case 2:
        return <Work />;
      default:
        return <Email onBoxClick={handleBoxClick}/>;
    }
  };
  return (
    <Box style={openDrawer ? {marginLeft: 250, width:'calc(100% - 250px)'} : {width:'100%'}}>
      <Box style = {{padding:'2px 10px 0 10px',display: 'flex', justifycontent: 'space-between', alignItems: 'center'}}>
        <Checkbox />
        <DeleteOutline />
      </Box>
      <Wrapperprimary>
      {buttonData.map((button, index) => (
          <Button
            key={button.name}
            onClick={() => handleButtonClick(index)}
            sx={{
              height: '60px',
              color: 'black',
              fontSize: 'medium',
              textTransform: 'none',
              border: 'none',
              borderRadius: 0,
              backgroundColor: activeButton === index ? 'lightgray' : 'white',
              borderBottom: activeButton === index ? '2px solid black' : 'none',
              '&:hover': {
                backgroundColor: activeButton === index ? 'gray' : 'gray',
              },
            }}
            variant={activeButton === index ? 'contained' : 'outlined'}
          >
            {button.icon} 
            {button.title}
          </Button>
        ))}
      </Wrapperprimary>
      <List>
      {renderContent()}
      </List>
    </Box>
  )
}

export default Emails