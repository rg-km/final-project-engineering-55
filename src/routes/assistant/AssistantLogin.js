import React from 'react'
import { Link } from 'react-router-dom';

const AssistantLogin = () => {
  return (
    <div>
        <h2>Login</h2>
        <form>
            <input placeholder='Email'/>
            <input placeholder='Sandi'/>
            <Link to="/assistant/home">
              <button>Login</button>
            </Link>
        </form>
    </div>
  )
}

export default AssistantLogin
