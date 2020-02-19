import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
          <div className="">
            <Link to="/Home">Home</Link>
            <Link to="/Bio">Bio</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>

          </div>
        );
      }
}

