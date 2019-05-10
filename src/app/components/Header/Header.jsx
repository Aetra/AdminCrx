import React from 'react';
import './styleHeader.css';
import {NavLink} from "react-router-dom";
import logoCrux from './img/LogoCrux.png';
import {AuthButton} from '../../.././Routing';

  class Header extends React.Component{
  render(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[d.getDay()];
    return(
     <header className="headerStyle container-fluids">
       <div className="row align-items-start">
          <div className="col-3">
              <img src={logoCrux} alt="Crux" className="logoCrux"/>
          </div>
          <div className="col-7 navbar-toggler">
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
          <div className="col-2">
            <div className="pt-3 buttonO">
              <AuthButton/>
            </div>
          </div>
        </div>
    </header>
   );
 }
}
export default Header;
