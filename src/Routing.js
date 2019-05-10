import React from 'react';
import Blocks from "./app/pages/Blocks/Blocks";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import ContainsLogIn2 from "./app/pages/Connect/ContainsLogIn2";
import Users from "./app/pages/Users/Users";
import Finance from "./app/pages/Finance/Finance";

import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
        }} />
  )} />
)

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  },
}

class RootingTest extends React.Component {
  render(){
  return (
    <div>
      <PrivateRoute path="/blocks" exact component={Blocks}/>
      <Route path="/login" exact component={ContainsLogIn2}/>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute path='/home' component={Home}/>
      <PrivateRoute path='/payments' component={Payments}/>
      <PrivateRoute path='/users' component={Users}/>
      <PrivateRoute path='/liveMiners' component={LiveMiners}/>
      <PrivateRoute path='/finance' component={Finance}/>

    </div>
  )}
}
export default RootingTest;
