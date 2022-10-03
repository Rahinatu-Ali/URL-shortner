import React, {useContext, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import './register.css';

function Register() {

  const navigate = useNavigate();
  
  // const { success, loading, user, authRegister } = useContext(AuthContext)
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



   const handleSubmit = (e) => {
    e.preventDefault();
    // authRegister(username, email, password, confirmPassword);
  };

  return (
    <div className='Register-form'>
      <div className='design'>
        <h3>Welcome To Our Registration Page</h3>
      </div>
            <form onSubmit={handleSubmit}>
        <div className='form'>
        <label htmlFor='username'>username</label>
          <input type='text'
            placeholder='Enter username'
            value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          </div>
        
        <div className='form'>
        <label htmlFor='email'>email</label>
          <input type='email'
            placeholder='Enter email'
            value={email} 
          onChange={(e) => setEmail(e.target.value)}  
          />
        </div>
        
        <div className='form'>
        <label htmlFor='password'>password</label>
          <input type='password'
            placeholder='Enter password'
            value={password}
          onChange={(e) => setPassword(e.target.value)}  
          />
        </div>
        
        <div className='form'>
        <label htmlFor='confirmPassword'>confirm password</label>
          <input type='password'
            placeholder='Confirm password'
            value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className='btn'>
         Register
        </button>

        <div>
          <p>I already have an account</p>
          <Link to="/login">
            Login
          </Link>
        </div>

      </form>
    </div>
  )
}

export default Register