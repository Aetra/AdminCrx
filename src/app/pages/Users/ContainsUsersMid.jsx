import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../../helpers/helpers';


  class ContainsUsersMid extends React.Component{
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
   Header: 'Login',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'timestamp' ,
   Cell: props => formatDate(props.value),
   id: 'links',
   style:{textAlign:"center"},
 }, {
   Header: 'Mail',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'amount',
   Cell: props => (parseInt(props.value)*0.000000001).toFixed(3),
   style:{textAlign:"center"},
 }, {
   Header:'Fee',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'address',
   Cell: props =><a href={"https://etherscan.io/address/{props.value}"}  className="hash" rel="noopener" target="_blank"> {props.value}</a>,
   style:{textAlign:"center"},
 },{
 Header:'Balance',
 headerStyle: { backgroundColor: '#7dcdcb' },
 accessor: 'tx',
 Cell: props =><a href={"https://etherscan.io/tx/{props.value}"}  className="hash" rel="noopener" target="_blank"> {props.value}</a>,
 style:{textAlign:"center"},
},
{
Header: 'Paid',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'timestamp' ,
Cell: props => formatDate(props.value),
id: 'links',
style:{textAlign:"center"},
},
{
Header: 'Blocks',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'timestamp' ,
Cell: props => formatDate(props.value),
id: 'links',
style:{textAlign:"center"},
},
{
Header: 'Threshold',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'timestamp' ,
Cell: props => formatDate(props.value),
id: 'links',
style:{textAlign:"center"},
},
{
Header: '%',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'timestamp' ,
Cell: props => formatDate(props.value),
id: 'links',
style:{textAlign:"center"},
},
{
Header: 'Last Beat',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'timestamp' ,
Cell: props => formatDate(props.value),
id: 'links',
style:{textAlign:"center"},
},






]

   return(
      <div className="midBlocks">
      <h3 className="mt-5">Miners</h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );
 }
}
export default ContainsUsersMid;
