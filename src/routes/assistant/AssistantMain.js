import React from 'react'
import AssistantNavbar from './components/AssistantNavbar'
import { Outlet } from 'react-router-dom'

const AssistantMain = () => {
  return (
    <div>
      <header>
        <AssistantNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AssistantMain
