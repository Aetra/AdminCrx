import React from 'react';
import './style.css';

class Finance extends React.Component{
  constructor(props) {
  super(props);
  this.state={
  stats:[],
  };
}
 render(){
   return(
     <div className="finance">
       <p> Finance</p>
    </div>
   );}
}
export default Finance;
