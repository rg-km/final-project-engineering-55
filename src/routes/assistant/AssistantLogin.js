import React from 'react'
import { Link } from 'react-router-dom';

const AssistantLogin = () => {
  return (
    <div>
        <h2>Asisten</h2>
        <form>
            <input placeholder='Email'/>
            <input placeholder='Sandi'/>
            <Link to="/assistant/main/home">
              <button>Login</button>
            </Link>
        </form>
    </div>
  )
}

export default AssistantLogin
