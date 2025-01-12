import React from 'react'
import { useOutletContext } from 'react-router-dom';

function ViewEmail1() {
    const {openDrawer} = useOutletContext();
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'100%'} : {width:'100%'}}>view1</div>
  )
}

export default ViewEmail1