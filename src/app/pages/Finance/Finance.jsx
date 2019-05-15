import React from 'react';
import ContainsFinance from "./ContainsFinance";
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
     <div className="blocks">
       <ContainsFinance/>
    </div>
   );}
}
export default Finance;
