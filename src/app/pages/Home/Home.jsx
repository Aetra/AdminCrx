import React from 'react';
import ContainsHome from './ContainsHome';
import ContainsTableR from './ContainsTableR';
import './styleHome.css';
import {userService, authenticationService } from '../.././services';


  class Home extends React.Component{
    constructor(props) {
           super(props);

           this.state = {
               currentUser: authenticationService.currentUserValue,
               users: null
           };
       }
       componentDidMount() {
      userService.getAll().then(users => this.setState({ users }));
  }
   render(){
             const { currentUser, users } = this.state;
     return(
       <div className="homee">
         <h2 className="pl-4 font-weight-light">Hi {currentUser.firstName}!</h2>
          {users &&
              <ul>
                  {users.map(user =>
                      <li key={user.id}>{user.firstName} {user.lastName}</li>
                  )}
              </ul>
          }
        <h1 className="mt-3 text-center font-weight-light"> Cruxpool Servers </h1>
        <hr className=" styleHr"/>
         <div className="pt-3 row">
           <div className="col-6">
             <ContainsHome/>
           </div>
           <div className=" col-6">
             <ContainsTableR/>
           </div>
         </div>
       </div>
     );
   }
  }
export default Home;
