import React from 'react';
import {fakeAuth,PrivateRoute} from '../../.././App';
import {Route,Redirect, withRouter} from "react-router-dom";


  class ContainsLogIn2 extends React.Component {
    constructor(props) {
    super(props);
    //this.handleSubmit=this.handleSubmit.bind(this);

    this.state={
      redirectToReferrer: false,
     };
}
  login = () => {
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

    return (
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
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
        </div>
      </div>
    </div>
</div>
    )
  }
}
export default ContainsLogIn2;
