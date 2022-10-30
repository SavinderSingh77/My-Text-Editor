import React, { useState } from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const searchBox = ()=>{
   let search =  document.getElementById("search")
  search.addEventListener('input',()=>{
 return search.value.toLowerCase();
  })
  }
  

  return (
  <>
  <nav id = "font-style" className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input onInput={searchBox} id = "search" className="form-control me-2" type="search" aria-label="Search" value = ""/>
      </form>
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

   