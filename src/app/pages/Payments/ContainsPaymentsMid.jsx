import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../../helpers/helpers';

  class ContainsPaymentsMid extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URL")+"admin/payments")
        .then(response=>{
          if (response.status === 200) {
            this.setState({posts:response.data.payments})

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

componentDidMount(){
  this.axiosResult = this.axiosResult.bind(this);
  this.axiosResult();
 setInterval(this.axiosResult, config.get("refreshInterval"))
}

 render(){
   const columns = [{
   Header: 'Time',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'timestamp' ,
   Cell: props => formatDate(props.value),
   id: 'links',
   style:{textAlign:"center"},
 }, {
   Header: 'Amount',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'amount',
   Cell: props => (parseInt(props.value)*0.000000001).toFixed(3),
   style:{textAlign:"center"},
 }, {
   Header:'Address',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'address',
   Cell: props =><a href={"https://etherscan.io/address/{props.value}"}  class="hash" rel="noopener" target="_blank"> {props.value}</a>,
   style:{textAlign:"center"},
 },{
 Header:'Tx ID',
 headerStyle: { backgroundColor: '#7dcdcb' },
 accessor: 'tx',
 Cell: props =><a href={"https://etherscan.io/tx/{props.value}"}  class="hash" rel="noopener" target="_blank"> {props.value}</a>,
 style:{textAlign:"center"},
}]

   return(
      <div className="midBlocks">
      <h3 className="mt-5"> Latest Payouts </h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );
 }
}
export default ContainsPaymentsMid;
