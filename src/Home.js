import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router'
import Bio from './components/Bio'
import Projects from './containers/Projects'
import Contact from './components/Contact'

export default class Home extends React.Component{

    state = {
        bio: false,
        projects: false,
        contact: false
    }

    render() {
      return (
          <div className="App" backgroundColor="#EBE9E9">
              <h2> Welcome to my porfolio! Please use the sidebar to navigate through my website.</h2>
        <Sidebar />
            {/* <Switch> */}
            {/* <Route exact path="/Home" component={Home} /> */}
            <Route exact path="/Bio" component={Bio} />
            <Route exact path='/Projects' component={Projects} />
            <Route exact path='/Contact' component={Contact} />
              {/* </Switch> */}
  
        </div>
      )
    }; 
  }