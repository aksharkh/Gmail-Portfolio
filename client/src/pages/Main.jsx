import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Main() {


    const [openDrawer , setOpenDrawer] = useState(true);
    const toggleDrawer = () =>{
        setOpenDrawer(prevState => !prevState);
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <Sidebar openDrawer={openDrawer}/>
        main
    </div>
  )
}

export default Main