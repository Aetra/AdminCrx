import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import 'react-table/react-table.css';
import {formatHashrate} from '../../helpers/helpers'

  class ContainsPaymentsTop extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       stats:[],
     };
  }
  componentDidMount(){
   axios.get(config.get("URL")+"admin/payments")
        .then(response=>{
          if (response.status === 200) {
            this.setState({stats:response.data})
            console.log(response);
          }
          else {
            throw new Error("Error");
          }
        })
        .catch(error => {
          console.log("api error:" + error);
          throw error;
});
}

 render(){
   const {stats}=this.state;
   const totalPayments=stats.paymentsTotal;

   return(
      <div className="topMiners text-center">
      <h4 className=""> Total Payments sent: {totalPayments} </h4>

      </div>
   );
 }
}
export default ContainsPaymentsTop;
