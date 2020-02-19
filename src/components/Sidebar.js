import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
          <aside className="sidebar">
            <Link to="/Home">Home</Link>
            <Link to="/Bio">Bio</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>

          </aside>
        );
      }
}

