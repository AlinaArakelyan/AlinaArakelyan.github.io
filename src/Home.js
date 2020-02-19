import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router'
import Laptop from './Laptop.jpg'

export default class Home extends React.Component{



  render() {
    return (
        <div className="App" backgroundColor="#EBE9E9">
          <h2> Welcome to my porfolio! <br></br> Please use the sidebar to navigate through my website.</h2>
          <img alt="laptop" className="lap" src={Laptop}></img>
        </div>
        )
    }; 
  }