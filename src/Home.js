import React from 'react';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router'
import Bio from './components/Bio'
import Projects from './containers/Projects'
import Contact from './components/Contact'

export default class Home extends React.Component{
    render() {
      return (
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Bio" component={Bio} />
            <Route exact path='/Projects' component={Projects} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
  
        </div>
      )
    }; 
  }