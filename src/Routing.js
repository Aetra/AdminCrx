import React from 'react';
import Blocks from "./app/pages/Blocks/Blocks";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import ContainsLogIn2 from "./app/pages/Connect/ContainsLogIn2";
import Users from "./app/pages/Users/Users";
import Finance from "./app/pages/Finance/Finance";
import {authenticationService} from './app/services';
import {history} from './app/helpers';

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
/*
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)
*/
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
  constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }
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
