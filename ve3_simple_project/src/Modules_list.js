import React, { Component } from 'react'
import web2 from "./images/backgroundimg.jpeg"
import css from "./HomePage.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ModuleOne from './ModuleOne';
// import { Button } from 'bootstrap';
function Modules_list() {
  const navigate=useNavigate();
  const handleClick=()=>navigate('/module_one')
  const handleClick2=()=>navigate('/module_two')
  const handleClick3=()=>navigate('/module_three')
  return (  
    <header>
      <div className = "head-text">
        <div className = "head-image">
          <img style={{height:'auto',width:'100%'} }width="1270" height="595"  src = {web2} alt = "img" />
        </div>
          <div aria-hidden="true" className='text2-on-image'>
          <div><Button variant="text"onClick={handleClick}>Module One</Button></div>
          <div><Button variant="text" onClick={handleClick2}>Module Two</Button></div>
          <div><Button variant="text"onClick={handleClick3}>Module Three</Button></div>
          

          <div><Button  variant="primary btn-block">Enter</Button></div>
          </div>
      </div>
    </header>
  );
};
export default Modules_list;
