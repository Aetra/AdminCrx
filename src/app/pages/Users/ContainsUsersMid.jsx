import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatBalance} from '../../helpers/helpers';
import {formatDuration} from '../../helpers/helpers';
import {progressThreshold} from '../../helpers/helpers';

  class ContainsUsersMid extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  componentDidMount(){
   axios.get(config.get("URL")+"admin/miners/all")
        .then(response=>{
          if (response.status === 200) {
            response.data.miners = Object.keys(response.data.miners).map((value) => {
              let m = response.data.miners[value];
              m.login = value;
              return m;
            });

            // Sort miners by hashrate
            response= response.data.miners.sort((a, b) => {
              if (a.hr < b.hr) {
                return 1;
              }
              if (a.hr > b.hr) {
                return -1;
              }
              return 0;
            });
          this.setState({posts:response})
          return response;
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
   const columns = [{
   Header: 'Login',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'login',
   Cell: props =><a href={"http://www.cruxpool.com/#/miner/"+props.value} className="hash" target="_blank" rel="noopener noreferrer"> {props.value}</a>,
   style:{textAlign:"center"},
 }, {
   Header: 'Mail',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'mail',
   style:{textAlign:"center"},
 }, {
   Header:'Fee',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'fee',
   style:{textAlign:"center"},
 },{
 Header:'Balance',
 headerStyle: { backgroundColor: '#7dcdcb' },
 accessor: 'balance',
 Cell: props => formatBalance(props.value),

 style:{textAlign:"center"},
},
{
Header: 'Paid',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'paid' ,
Cell: props => formatBalance(props.value),
id: 'links',
style:{textAlign:"center"},
},
{
Header: 'Blocks',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'blocksFound' ,
style:{textAlign:"center"},
},
{
Header: 'Threshold',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'threshold' ,
style:{textAlign:"center"},
},
{
Header: '%',
headerStyle: { backgroundColor: '#7dcdcb' },
id: 'percent',
accessor: d => progressThreshold(d.balance, d.threshold),
style:{textAlign:"center"},
},

{
Header: 'Last Beat',
headerStyle: { backgroundColor: '#7dcdcb' },
accessor:'lastShare' ,
Cell: props => formatDuration(props.value),

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
