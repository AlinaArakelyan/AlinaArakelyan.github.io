import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Ruby, Rails, SQL, Postgresql, JavaScript, React, Redux, Git, CSS, HTML5, ActiveRecord
        </p>
        <NavLink
          exact to="/Home"
          className="App-link"
          // target="_blank"
        >
          Enter
          </NavLink>
      </header>
    </div>
  );
}

export default App;

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
