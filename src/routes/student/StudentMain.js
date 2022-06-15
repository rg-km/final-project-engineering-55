import React from 'react'
import StudentNavbar from './components/StudentNavbar'
import { Outlet } from 'react-router-dom'

const StudentMain = () => {
  return (
    <div>
      <header>
        <StudentNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default StudentMain
