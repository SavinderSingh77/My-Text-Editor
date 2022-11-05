import React, { useState } from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'


export default function Navbar(props) {
 
  

  return (
  <>
  <nav id = "font-style" className="navbar navbar-expand " style = {{background: props.mode === "light" ? `#100a5ad4`:'#e4e4e4', transition : "1s"}} >
  <div className="container-fluid">
    <a className="navbar-brand" style = {{color:props.mode === 'light'?'white':'black'}} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className=" nav-link active" style = {{color:props.mode === 'light'?'white':'black'}} aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style = {{color:props.mode === 'light'?'white':'black'}} aria-current="page" href="/">{props.about}</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor ="flexSwitchCheckDefault" style = {{color:props.mode === 'light'?'white':'black'}}>{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>
    </div>
  </div> 
</nav>
  </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired 
  };

Navbar.defaultProps = {
    title :"Navbar",
    home:'Home',
    about:'About Us'}

   