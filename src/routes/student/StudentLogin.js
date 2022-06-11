import React from 'react';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  return (
    <div>
        <h2>Siswa</h2>
        <form>
            <input placeholder='Email'/>
            <input placeholder='Sandi'/>
            <Link to="/student/home">
              <button>Login</button>
            </Link>
        </form>
    </div>
  )
}

export default StudentLogin
