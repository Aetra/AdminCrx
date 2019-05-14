import React from 'react';
import './styleHeader.css';
import {NavLink} from "react-router-dom";
import logoCrux from './img/LogoCrux.png';
import { authenticationService } from '../.././services';
import { history } from '../.././helpers';
  class Header extends React.Component{

        logout() {
            authenticationService.logout();
            history.push('/login');
        }

  render(){
    return(
     <header className="headerStyle container-fluids">
       <div className="row align-items-start">
          <div className="col-3">
              <img src={logoCrux} alt="Crux" className="logoCrux"/>
          </div>
          <div className="col-8 navbar-toggler">
            <ul>
              <li>
                <NavLink to= "/home"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/blocks">Blocks</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/liveMiners">LiveMiners</NavLink>
              </li>
              <li>
                <NavLink to="/payments">Payments</NavLink>
              </li>
              <li>
                <NavLink to="/Finance">Finance</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="pt-3 buttonO">
                <button onClick={this.logout} className="button">Logout</button>
            </div>
          </div>
        </div>
    </header>
   );
 }
}
export default Header;
