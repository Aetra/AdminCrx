import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate,variance} from '../../helpers/helpers';

  class ContainsBlocksRight extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  componentDidMount(){
   axios.get(config.get("URL")+"admin/blocks")
        .then(response=>{
          if (response.status === 200) {
            this.setState({posts:response.data.candidates})
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
   var j=this.state.posts.slice(0,16).length;
   var k=this.state.posts.slice(0,32).length;
   var l=this.state.posts.slice(0,64).length;
   var m=this.state.posts.slice(0,128);
   var n=this.state.posts.slice(0,256);
   var Tot=this.state.posts.slice(0,1024);



   console.log(j,k,l,m,n,Tot);
   var i=this.state.posts.length;
   console.log(i);
   const columns = [{
   Header: 'Blocks',
   headerStyle: { backgroundColor: '#7dcdcb' },
   Cell: row => (
              <div>
                {j}
              </div>
    ),
   style:{textAlign:"center"},
 },{
   Header:'Luck',
   headerStyle: { backgroundColor: '#7dcdcb' },
   id: 'vari',
   accessor: d =>'ui',//variance(d.shares, d.difficulty).toFixed(0)
   Cell: (row) => {
     return <div>{row.index+1}</div>;
   },
   style:{textAlign:"center"},
   width:400,
 }]

   return(
      <div className="col-5 midBlocks">
      <h3 className="mt-4 font-weight-light"> Luck on the last blocks found </h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );}
}
export default ContainsBlocksRight;
