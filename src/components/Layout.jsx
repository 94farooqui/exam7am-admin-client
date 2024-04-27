import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className="">
      <div className="grid grid-cols-[256px_auto]">
        <Sidebar />
        <div className="w-full 1fr">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout