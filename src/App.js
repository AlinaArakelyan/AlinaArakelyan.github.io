import React from 'react';
import logo from './logo.png';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import './App.css';
import Port from "./Port"

export default class App extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }
  render() {
    const isClicked = this.state.clicked
    return (
      <div>
        {!isClicked ?
          (< div className="App" >
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Ruby, Rails, SQL, Postgresql, JavaScript, React, Redux, Git, CSS, HTML5, ActiveRecord
        </p>
              <Router>
                <Link onClick={this.handleClick}
                  exact to="/Port"
                  className="App-link"
                > Enter Here
               <Switch>
                    <Route exact path="/Port" component={Port} />
                  </Switch>
                </Link>
              </Router>
            </header>
          </div >) :
          (<div>
            <Port />
          </div>)
        }
      </div>

    )
}
}



// <SideNav
//     onSelect={(selected) => {
//         // Add your code here
//     }}
// >
//     <SideNav.Toggle />
//     <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//             <NavIcon>
//                 <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Home
//             </NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//             <NavIcon>
//                 <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Charts
//             </NavText>
//             <NavItem eventKey="charts/linechart">
//                 <NavText>
//                     Line Chart
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="charts/barchart">
//                 <NavText>
//                     Bar Chart
//                 </NavText>
//             </NavItem>
//         </NavItem>
//     </SideNav.Nav>
// </SideNav>
