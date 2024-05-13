import React from 'react'
import Navbar from './Navbar'

export const Dashboard = ({sidebarToogle, setSidebarToogle}) => {
  return (
    <div className={`${sidebarToogle ? "ml-32" : " ml-64 "} w-full`}>
        <Navbar
        sidebarToogle = {sidebarToogle}
        setSidebarToogle={setSidebarToogle}/>
    </div>
  )
}


export default Dashboard