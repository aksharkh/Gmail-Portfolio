import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Emails from '../components/Emails';
import { Outlet } from 'react-router-dom';

function Main() {


    const [openDrawer , setOpenDrawer] = useState(true);
    const toggleDrawer = () =>{
        setOpenDrawer(prevState => !prevState);
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <Sidebar openDrawer={openDrawer}/>
        <Outlet context={{openDrawer}}/>
    </div>
  )
}

export default Main