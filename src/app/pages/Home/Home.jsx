import React from 'react';
import ContainsHome from './ContainsHome';
import ContainsTableR from './ContainsTableR';
import './styleHome.css';
import {userService, authenticationService } from '../.././_services';


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

      componentWillUnmount() {
          this.setState({currentUser:null,users:null})
      }

   render(){
     return(
       <div className="homee">
        <h1 className="mt-3 text-center font-weight-light"> Cruxpool Servers </h1>
        <hr className=" styleHr"/>
         <div className="pt-3 row">
           <div className="col-3">
             <ContainsHome/>
           </div>
           <div className=" col-9">
             <ContainsTableR/>
           </div>
         </div>
       </div>
     );
   }
  }
export default Home;
