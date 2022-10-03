import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  // const { success, loading, user, authLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Register-form">
      <div className='design'>
        <h3>Welcome Again</h3>
      </div>
    <form onSubmit={handleSubmit}>
      
        <div className='form'>
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form'>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>
        <button type="submit" className="btn">
          <Link to='/url'>Login</Link>
        </button>
        <div>
          I don't have an account
          <Link to="/">
            Register
          </Link>
        </div>
     
      </form>
       </div>
  );
}

export default Login;
