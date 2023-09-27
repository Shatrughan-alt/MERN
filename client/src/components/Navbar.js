import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
import logo from "../images/logo1.png"
import { UserContext } from '../App';






export default function Navbar() {

  const {state,dispatch}=useContext(UserContext);



  const RenderMenu = () => {

    if(state){
    return (
      <>
        <li class="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
      </>
    )
    }else{
      return(
        <>
          <li class="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" to="/signup">Registration</NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </>
      )
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" to="#"><img src={logo} alt="logo" style={{height:80}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <RenderMenu/>
          </ul>
         
        </div>
      </nav>
    </>
  )
}
