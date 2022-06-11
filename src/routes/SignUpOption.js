import React from 'react'
import { Link } from "react-router-dom";

const SignUpOption = () => {
  return (
    <div>
        <h1><center>VLab</center></h1>
        <hr/>
        Pilih Akun
        <br></br>
          <button>
            <Link to="/create-account">
              Sebagai Asisten<br></br>
              Akun untuk asisten, admin, guru ,dan lainnya
            </Link>
          </button>
        <br></br>
          <button>
            <Link to="/create-account">
              Sebagai Murid<br></br>
              Akun untuk murid, praktikan, parsitipan, member dan lainnya
            </Link>
          </button>
          <Link to="/login">
            <p align="right">Sudah punya akun? Log In</p>
          </Link>
    </div>
  )
}

export default SignUpOption