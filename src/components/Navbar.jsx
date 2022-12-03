import React from 'react'
import { Link } from 'react-router-dom'
import "../components/navbar.css"

const Navbar = ()=> {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-element">
            <Link to={"/"}>
                Home
            </Link>
        </div>
        <div className="nav-element">
            <Link to={"/about"}>
                About
            </Link>
        </div>
        {/* <div className="nav-element">
            <Link to={"/contact"}>
                Contact
            </Link>
        </div> */}
        <div className="nav-element">
            <Link to={"/mission"}>
                Mission
            </Link>
        </div>
        <div className="nav-element">
            <Link to={"/accomplishments"}>
                Accomplishment
            </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar