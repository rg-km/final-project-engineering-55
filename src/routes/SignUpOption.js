import React from 'react'
import { Link } from "react-router-dom";

const SignUpOption = () => {
  return (
    <div>
        <h1><center>VLab</center></h1>
        <hr/>
        Pilih Akun
        <br></br>
        <Link to="/sign-up-option/assistant">
          <button>
              Sebagai Asisten<br></br>
              Akun untuk asisten, admin, guru ,dan lainnya
          </button>
        </Link>
        <br></br>
        <Link to="/sign-up-option/student">
          <button>
              Sebagai Murid<br></br>
              Akun untuk murid, praktikan, parsitipan, member dan lainnya
          </button>
          </Link>
          <p align="right">Sudah punya akun? 
            <Link to="/login">Log In</Link>
          </p>
    </div>
  )
}

export default SignUpOption