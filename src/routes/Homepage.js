import React from 'react'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <header>
            VLab
        </header>
        <main>
            <h1>Praktikum dimana saja, kapan saja, dan dengan siapa saja</h1>
            <p>
              VLab adalah sebuah Learning Management System (LMS) yang dikembangkan
              khusus untuk memfasilitasi proses pembelajaran praktikum virtual atau tanpa tatap muka.
              Dengan fitur ini, asisten praktikum dapat memberikan bahan ajar yang dapat diakses dan
              dibagikan oleh siswa dalam bentuk digital kapan saja dan di mana saja.
            </p>
            <div>
              <Link to="/create-account">
                <button>
                  Sign In
                </button>
              </Link>
              <Link to="/login">
                <button>
                  Log In
                </button>
              </Link>
            </div>
        </main>
    </div>
  )
}

export default Homepage
