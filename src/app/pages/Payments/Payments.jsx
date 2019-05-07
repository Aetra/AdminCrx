import React from 'react';
import './style.css';
import ContainsPaymentsTop from "./ContainsPaymentsTop";
import ContainsPaymentsMid from "./ContainsPaymentsMid";


  class Payments extends React.Component{
   render(){
     return(
       <div className="payments">
        <ContainsPaymentsTop/>
        <ContainsPaymentsMid/>
      </div>
     );
   }
  }
export default Payments;
