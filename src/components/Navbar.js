import React, { useState } from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'


export default function Navbar(props) {
const [text,setText] = useState("");
const btnSearch = ()=>{
  // console.log(text)
  props.searchBar(text)
}
const handleChange = (e)=>{

  setText(e.target.value)
  // props.searchBar(e.target.value)
}
const ul = document.getElementsByTagName('ul')[0]
console.log(ul)
if(window.screen.width <960){
  console.log("hello")
}


  return (
  <>
  <nav id = "font-style" className="navbar navbar-expand " style = {{background: props.mode === "light" ? `#100a5ad4`:'#e4e4e4', transition : "1s"}} >
  <div className="container-fluid">

    <a className="navbar-brand" style = {{color:props.mode === 'light'?'white':'black'}} href="#">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id = "flex" className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className=" nav-link active" style = {{color:props.mode === 'light'?'white':'black'}} aria-current="page" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style = {{color:props.mode === 'light'?'white':'black'}} aria-current="page" href="#">{props.about}</a>
        </li>
        
      </ul>



      {/* <form className="form-inline max-2 my-2 my-lg-0"  > */}
      <input id = "searchbar"  className=" mr-sm-2" type="search" aria-label="Search" placeholder='Search' style = {{background:props.mode === 'light'?'white':'white',outline:'3px solid white',color:'black', borderRadius:'7px',height:'2.2rem'}} value = {text} onChange={handleChange}/>
      <button onClick={btnSearch}  className="searchBtn mx-2 my-3 my-sm-0"  style = {{background: props.mode === "light" ? `#100a5ad4`:'black', transition : "1s"}}>Search</button>
    {/* </form> */}




      <div className="form-check form-switch mx-5">
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
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

   