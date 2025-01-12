import React from 'react'
import { useOutletContext } from 'react-router-dom';

function ViewEmail() {
    const {openDrawer} = useOutletContext();
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'100%'} : {width:'100%'}}>view</div>
  )
}

export default ViewEmail