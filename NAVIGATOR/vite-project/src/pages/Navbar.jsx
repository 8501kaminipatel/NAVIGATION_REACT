


import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Usercontext } from '../CONTEXT/Userauth'

const Navbar = () => {

  const { token, handlelogin } = useContext(Usercontext);
  const navigate = useNavigate();

  const handledel = () => {
    handlelogin(null)
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">ProductSite</Link>
        </div>

        <ul className="navbar-menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>

          {token && <button onClick={handledel}>LOGOUT</button>}
        </ul>
      </nav>
    </>
  )
}

export default Navbar;