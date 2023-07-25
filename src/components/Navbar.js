import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to='/dashboard'>Dashboard </Link>
      <Link className="nav-item nav-link" to='/staffdetails'>Staff Details</Link>
      <Link className="nav-item nav-link" to='/logout'>Logout</Link>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar