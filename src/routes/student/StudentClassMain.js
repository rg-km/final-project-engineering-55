import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentClassNavbar from './components/StudentClassNavbar'

const StudentClassMain = () => {
  return (
    <div>
      <header>
        <StudentClassNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default StudentClassMain
