import React from 'react';
import {fakeAuth} from '../../.././Routing';
import {Redirect} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {authenticationService} from '../.././services';

import './Style.css';

  class ContainsLogIn2 extends React.Component {
    constructor(props) {
    super(props);
    if (authenticationService.currentUserValue) {
         this.props.history.push('/');npm install -S yup
     }
    //this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      redirectToReferrer: false,
     };
   }

  submit = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
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

    return (
      <div className="ui anchor part_Cont container-fluid">
        <div className="stContact">
          <div className="row">
            <div className="col-12">
              <p>You must log in to view the page</p>
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
                <button onClick={this.submit}type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
              </div>
            </form>
        </div>
      </div>
    </div>
</div>
    )
  }
}
export default ContainsLogIn2;
