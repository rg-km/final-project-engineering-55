import React from 'react'
import { Link, Outlet } from "react-router-dom";

const LogInOption = () => {
  return (
    <>
      <header>
        <h1>VLab</h1>
      </header>
      <hr></hr>
      <nav>
        <div>
          <p>Masuk Sebagai</p>
          <Link to="/login/assistant">
            <span>
              Asisten
            </span>
          </Link>
          <span> </span>
          <Link to="/login/student">
            <span>
              Siswa
            </span>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default LogInOption
