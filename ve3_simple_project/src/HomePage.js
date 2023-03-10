import React, { Component } from 'react'
import web from "./images/back_image.jpg"
import web2 from "./images/backgroundimg.jpeg"
import css from "./HomePage.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modules_list from './Modules_list';
// import { Button } from 'bootstrap';
function HomePage() {
  const navigate=useNavigate();
  const handleClick=()=>navigate('./Modules_list.js')
  return (  
    <header>
      <div className = "head-text">
        <div className = "head-image">
          <img width="1270" height="595" style={{height:'auto',width:'100%'}} src = {web2} alt = "image" />
        </div>
          <div  className='text-on-image'>
             <h3> Fusce sem magna pharetra cursus</h3>
             <p > ‘Morbi tincidunt nisi id vulputate consequat. Morbi arcu
                    libero, pellentesque eu bibendum non, eleifend ut nisi.
                    Phasellus mattis nibh ullamcorper euismod sodales. Donec
                    ‘metus eros, euismod dapibus fermentum non, gravida id ex.
                    Duis vitae dui sit amet lectus ultrices lacinia eget in tellus.
                    Vivamus lacinia lectus id justo fermentum tincidunt. Duis
                    consectetur porttitor tincidunt. Sed dapibus nulla vitae risus elementum dictum.</p>
          
          <Button  variant="primary btn-block" onClick={handleClick}>Enter</Button>{' '}
            
          </div>
          <div>
         
          </div>
      </div>
    </header>
  );
};
export default HomePage;
