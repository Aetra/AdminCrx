import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import App from '../../.././App';
import {Route,Redirect, withRouter} from "react-router-dom";


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


  class ContainsLogIn extends React.Component {
    constructor(props) {
    super(props);
    //this.handleSubmit=this.handleSubmit.bind(this);
    this.login=this.login.bind(this);

    this.state={
      redirectToReferrer: false,
     };
     console.log(this.state)
  }

    login = () => {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
    })
  }
    /*
    handleSubmit(event){
      var body="username="+this.username.value+"&password="+this.password.value;
    }
    onSubmit(e) {
       e.preventDefault();

       const { username, password } = this.state;
       const { history } = this.props;
       this.setState({ error: false });
       if (!(username === 'george' && password === 'foreman')) {
         return this.setState({ error: true });
       }
     }*/
    render(){
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let { redirectToReferrer } = this.state.redirectToReferrer;
      if (redirectToReferrer) return <Redirect to={from} />;

      return(
        <div className="anchor part_Cont container-fluid">
          /*
          <div className="stContact">
            <div className="row">
              <div className="col-12">
                <h2 className="titleContact"> Log In</h2>
              </div>
            </div>
          <div className="mt-3 row ">
            <div className="col-12 col-sm-6 mx-auto">
              <form onSubmit={this.handleSubmit} id="contact-form" className="form" role="form">
                <div className="form-group">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input type="username" className="form-control" id="username" ref={(input) => this.username = input} placeholder="Enter Username" tabIndex="2" required/>
              </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Password</label>
                  <input type="password" className="form-control" id="password" ref={(input) => this.password = input} placeholder="Enter Password" tabIndex="3" required/>
                </div>
                <label>
                  <input type="checkbox" checked="checked" name="remember" /> Remember Me
                </label>
                <div className="text-center">
                  <button type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
                </div>
              </form>
                */

                <p>You must log to view the page</p>
                    <button onClick={this.login}>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContainsLogIn;
