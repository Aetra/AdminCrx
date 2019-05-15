import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatBalance,formatDuration,progressThreshold} from '../../helpers/helpers';

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
            response= response.data.miners.sort((a, b) => {
              return response;
            });
            this.setState({posts:response});
            return 0;
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
   const countUsers=this.state.posts.length;
   const columns = [{
   Header: 'Login',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'login',
   Cell: props =><a href={"http://www.cruxpool.com/#/miner/"+props.value} className="hash" target="_blank" rel="noopener noreferrer"> {props.value}</a>,
   style:{textAlign:"center"},
  },{
   Header: 'Mail',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'mail',
   style:{textAlign:"center"},
   width:280,
   maxWidth:280,
   minWidth:200,

 },{
   Header:'Fee',
   headerStyle: { backgroundColor: '#7dcdcb' },
   id:'fee',
   accessor:d=>d.fee,
   style:{textAlign:"center"},
   Cell: row => (
     row.value==='-1'?
     <span className="" style={{color:'#F23737'}}>end</span> :
     <span className="" style={{color:'#00C071'}}>{row.value}</span>
   ),
   sortMethod: (a, b) => {
     var aa,bb;
     if(a==="" || a===undefined || a===0 ){
       aa=0;
     }else{
       aa=parseFloat(a);
     }
     if(b==="" || b===undefined ||b===0){
       bb=0;
     }else{
       bb=parseFloat(b);
     }
     return aa > bb ? 1 : -1;
   },
   width:100,
   maxWidth:100,
   minWidth:100,
 },{
   Header:'Balance',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'balance',
   Cell: props => formatBalance(props.value),
   style:{textAlign:"center"},
   sortMethod: (a, b) => {
     var aa = parseFloat(a);
     var bb = parseFloat(b);
     return aa > bb ? 1 : -1;
   },},{
    Header: 'Paid',
    headerStyle: { backgroundColor: '#7dcdcb' },
    id:"paid",
    accessor: d=>formatBalance(d.paid),
    Cell: row =>(
    row.value==='NaN'?
    <p className="" style={{color:'black'}}>0.000000</p> :
    <span className="" style={{color:'#eea770'}}>{row.value}</span>
  ),
  sortMethod: (a, b) => {
    var aa,bb;
    if(a==='NaN'){
      aa=0;
    }else{
      aa=parseFloat(a);
    }
    if(b==='NaN'){
      bb=0;
    }else{
      bb=parseFloat(b);
    }
    return aa > bb ? 1 : -1;
  },
    style:{textAlign:"center"},
  },{
    Header: 'Blocks',
    headerStyle: { backgroundColor: '#7dcdcb' },
    id: 'bl',
    accessor: d=> d.blocksFound,
    sortMethod: (a, b) => {
      var aa,bb;
      if(a==="" || a===undefined ){
        aa=0;
      }else{
        aa=parseInt(a);
      }
      if(b==="" || b===undefined ){
        bb=0;
      }else{
        bb=parseInt(b);
      }
      return aa > bb ? 1 : -1;
    },
    style:{
      textAlign:"center",
      color:'#56ab86'
    },
    width:70,
    maxWidth:100,
    minWidth:100,
  },{
    Header: 'Threshold',
    headerStyle: { backgroundColor: '#7dcdcb' },
    accessor:'threshold' ,
    style:{textAlign:"center"},
    width:100,
    maxWidth:100,
    minWidth:100,
    sortMethod: (a, b) => {
      var aa,bb;
      if(a==="" || a===undefined ){
        aa=0;
      }else{
        aa=parseFloat(a);
      }
      if(b==="" || b===undefined ){
        bb=0;
      }else{
        bb=parseFloat(b);
      }
      return aa > bb ? 1 : -1;
    },
  },{
    Header: '%',
    headerStyle: { backgroundColor: '#7dcdcb' },
    id: 'percent',
    Cell: row => (row.value+ "%"),
    accessor: d => progressThreshold(d.balance, d.threshold),
    sortMethod: (a, b) => {
      var aa = parseFloat(a);
      var bb = parseFloat(b);
      return aa > bb ? 1 : -1;
    },
    style:{
      textAlign:"center",
      color:'#2181c8'},
  },{
    Header: 'Last Beat',
    headerStyle: { backgroundColor: '#7dcdcb' },
    accessor:'lastShare' ,
    Cell: props => formatDuration(props.value),
    id: 'links',
    style:{textAlign:"center"},
  },]

  return(
      <div className="container-fluid midBlocks container-fluid">
      <h3 className="mt-4 font-weight-light">Miners</h3>
      <h4 className="font-weight-light">Total Users: {countUsers}</h4>

      <ReactTable
        data={this.state.posts}
        columns={columns}
        defaultSorted={[
           {
             id: "block",
             desc: true
           }
         ]}
        NoDataText={"Please Wait"}/>
      </div>
   );}
}
export default ContainsUsersMid;
