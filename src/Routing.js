import React from 'react';
import Blocks from "./app/pages/Blocks/Blocks";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import ContainsLogIn2 from "./app/pages/Connect/ContainsLogIn2";
import Users from "./app/pages/Users/Users";
import Finance from "./app/pages/Finance/Finance";

import {Route, Redirect, withRouter} from "react-router-dom";

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

// Because we pass our component to withRouter
// our component will be passed `history` as a prop.
export const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

class RootingTest extends React.Component {
  render(){
  return (
    <div>
      <Route path="/blocks" exact component={Blocks}/>
      <Route path="/login" exact component={ContainsLogIn2}/>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/payments' component={Payments}/>
      <Route path='/users' component={Users}/>
      <Route path='/liveMiners' component={LiveMiners}/>
      <Route path='/finance' component={Finance}/>

    </div>
  )}
}
export default RootingTest;
