import React from 'react'
import { useOutletContext } from 'react-router-dom';

function ViewEmail2() {
    const {openDrawer} = useOutletContext();
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'100%'} : {width:'100%'}}>view2</div>
  )
}

export default ViewEmail2