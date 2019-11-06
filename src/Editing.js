
import logo from './logo.svg';
import React, { Component } from 'react'
import ImageGalary from './comp/ImageGalary'
import './App.css';
import Thing from './Thing'
import axios from 'axios'
import {Navbar,Nav,} from 'react-bootstrap'
import Edit from './comp/Edit'

export default class Editing extends Component {
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
    

  {this.state.img === ''?<ImageGalary chooseImg={this.chooseImg} /> : ''}
              {/* { this.state.data !== null?  this.state.data.map(item=><Image data={item}/>) : ''} */}
 
  {this.state.img !== ''?<Edit image={this.state.img} /> : ''}
      
{/* <Thing /> */}
      </div>
    )
  }
}
