import React from 'react';
import Blocks from "./app/pages/Blocks/Blocks";
import Home from "./app/pages/Home/Home";
import LiveMiners from "./app/pages/LiveMiners/LiveMiners";
import Payments from "./app/pages/Payments/Payments";
import ContainsLogIn2 from "./app/pages/Connect/ContainsLogIn2";
import Users from "./app/pages/Users/Users";
import Finance from "./app/pages/Finance/Finance";
import {authenticationService} from './app/_services';
import {history} from './app/helpers';
import {Route, Redirect} from "react-router-dom";

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
    //const { currentUser } = this.state;
  return (
    <div>
      <div>
      <PrivateRoute path="/blocks" exact component={Blocks}/>
      <PrivateRoute exact path='/home' component={Home}/>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute path='/payments' component={Payments}/>
      <PrivateRoute path='/users' component={Users}/>
      <PrivateRoute path='/liveMiners' component={LiveMiners}/>
      <PrivateRoute path='/finance' component={Finance}/>
      <PrivateRoute path='/charts' component={Finance}/>

      </div>

      <Route path="/login" exact component={ContainsLogIn2}/>


    </div>
  )}
}
export default RootingTest;
