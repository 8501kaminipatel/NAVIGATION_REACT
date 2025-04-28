import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Usercontext } from '../CONTEXT/Userauth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { handlelogin } = useContext(Usercontext)
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', { email, password })
      .then((response) => {
        console.log(response.data)
        console.log(response.data.token);
        handlelogin(response.data.token)
        navigate("/product")
      })
      .catch((error) => console.log(error));

  };
  return (
    <div className='back'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login