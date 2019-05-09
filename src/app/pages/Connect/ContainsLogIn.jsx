import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import {Store} from 'react-stores';
  class ContainsLogIn extends React.Component{
    constructor(props) {
      super(props);
    this.state = {
        username: "",
        password: ""
      };

    this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();

      const { username, password } = this.state;
      const { history } = this.props;

      this.setState({ error: false });

      if (!(username === 'george' && password === 'foreman')) {
        return this.setState({ error: true });
      }

      Store.set('loggedIn', true);
      history.push('/users');
    }




    render(){
      return(
        <div className="anchor part_Cont container-fluid">
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
                  <input type="username" className="form-control" id="username" ref={(input) => this.mail = input} placeholder="Enter Username" tabIndex="2" required/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Password</label>
                  <input type="password" className="form-control" id="password" ref={(input) => this.subject = input} placeholder="Enter Password" tabIndex="3" required/>
                </div>
                <label>
                  <input type="checkbox" checked="checked" name="remember" /> Remember Me
                </label>
                <div className="text-center">
                  <button type="submit" className="btn btn-start-order" value="Submit">SUBMIT</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );

    }
  }
export default ContainsLogIn;
