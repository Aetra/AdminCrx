import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../../helpers/helpers';
import {variance} from '../../helpers/helpers';

  class ContainsBlocksMid extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URL")+"admin/blocks")
        .then(response=>{
          if (response.status === 200) {
            this.setState({posts:response.data.candidates})
            console.log(response.data.candidates);
            const diff=response.data.candidates[0].difficulty;
            const share=response.data.candidates[0].shares;
            console.log(variance(diff,share));
            console.log(response.data.candidates[0].difficulty);
            console.log(response.data.candidates[0].shares);
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
   Header: 'Height',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: d =>  new Intl.NumberFormat('en-GB', {style:'decimal'}).format(d.height),
   id: 'links',
   Cell: props =><a href={"https://etherscan.io/block/height"} class="hash" rel="nofollow" target="_blank"> {props.value}</a>,
   style:{textAlign:"center"},
 }, {
   Header: 'Time Found',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'timestamp',
   style:{textAlign:"center"},
   Cell: props => formatDate(props.value),
 }, {
   Header:'Variance',
   headerStyle: { backgroundColor: '#7dcdcb' },
   id: 'open_rate',
   accessor: d => variance(d.shares, d.difficulty).toFixed(0),
   Cell: row => <span>{row.value} %</span>,
   style:{textAlign:"center"},
 }]

   return(
      <div className="midBlocks">
      <h3 className="mt-5"> Recently Found Blocks </h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );
 }
}
export default ContainsBlocksMid;
