import React from 'react';
import Blocks from "./pages/Blocks/Blocks";
import Home from "./pages/Home/Home";
import LiveMiners from "./pages/LiveMiners/LiveMiners";
import Payments from "./pages/Payments/Payments";
import LogInPage from "./pages/Connect/LogInPage";
import ContainsLogIn2 from "./pages/Connect/ContainsLogIn2";
import Users from "./pages/Users/Users";
import {Route, Switch, Redirect,Router,Link, withRouter} from "react-router-dom"

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
    <Router>
      <Route path="/blocks" exact component={Blocks} />
      <Route path="/login" exact component={ContainsLogIn2} />
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/payments' component={Payments} />
      <PrivateRoute path='/users' component={Users} />
      <PrivateRoute path='/liveMiners' component={LiveMiners} />
    </Router>
  )
}
}
export default RootingTest;
