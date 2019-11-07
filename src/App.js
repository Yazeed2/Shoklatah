
import logo from './logo.svg';
import React, { Component } from 'react'
import ImageGalary from './comp/ImageGalary'
import './App.css';
import Thing from './Thing'
import axios from 'axios'
import {Navbar,Nav} from 'react-bootstrap'
import Designs from './Designs'
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import Editing from './Editing';

export default class App extends Component {
  state={
    data : [],
    img: ''
  }
  chooseImg =(imgSrc)=>{

    console.log(imgSrc);
    this.setState({
      img: imgSrc
    })
    
  }
  render() {
  
    return (
      <div>
          
<BrowserRouter>

<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Shokla6ah</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink className="nav-link" to="">Home</NavLink>

      <NavLink className="nav-link" to="Designs">Designs</NavLink>
    </Nav>
  
  </Navbar>
<Switch>
<Route path="/Designs" component={Designs}/>

<Route path="/" component={Editing}/>


  
</Switch>

</BrowserRouter>
    
 
      </div>
    )
  }
}
