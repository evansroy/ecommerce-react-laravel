import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MasterLayout = () => {
  return (
    <div id='content'>
      <Navbar/>
      <div className="sidebar">
        <Sidebar/>
      </div>
      
    </div>
  )
}

export default MasterLayout
