import React from 'react'
import { Outlet } from 'react-router-dom'
import AssistantClassNavbar from '../../components/assistant/AssistantClassNavbar'

const AssistantClassMain = () => {
  return (
    <div>
      <header>
        <AssistantClassNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AssistantClassMain
