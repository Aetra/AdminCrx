import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';

  class ContainsLogIn extends React.Component{
    constructor(props) {
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event)
    {
      var body = "mail="+this.mail.value+"&subject="+this.subject.value+"&message="+this.message.value;

        fetch('https://iliium.com/api/contact',{
          method:'POST',
          body:body,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((response) =>
          {
            if (response.ok){
              alert('Contact send, we will process your request as soon as possible.');
            } else {
              alert('Error sending mail, please try again');
            }
          },
          (error) =>
          {
            window.alert('Contact failled, please retry');
          });

      event.preventDefault();
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
              <form onSubmit={this.handleSubmit} id="contact-form" class="form" role="form">
                <div className="form-group">
                  <label className="form-label" for="email">Username</label>
                  <input type="email" className="form-control" id="email" ref={(input) => this.mail = input} placeholder="Enter Username" tabindex="2" required/>
                </div>
                <div className="form-group">
                  <label className="form-label" for="subject">Password</label>
                  <input type="subject" className="form-control" id="subject" ref={(input) => this.subject = input} placeholder="Enter Password" tabindex="3" required/>
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
