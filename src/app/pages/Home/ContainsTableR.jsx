import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate,formatDifficulty} from '../../helpers/helpers';

  class ContainsTableR extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URLAPI")+"/pool/stats")
        .then(response=>{
          if (response.status === 200) {
            response.data.data.nodes = Object.keys(response.data.data.nodes).map((value) => {
              let m = response.data.data.nodes[value];
              return m;
            });
            response= response.data.data.nodes.sort((a, b) => {
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
  componentDidMount(){
    this.axiosResult = this.axiosResult.bind(this);
    this.axiosResult();
   setInterval(this.axiosResult, config.get("refreshInterval"))
  }

 render(){
  const columns = [{
     Header: 'Name of Pool',
     headerStyle: { backgroundColor: '#7dcdcb' },
     accessor: 'name',
     style:{textAlign:"center"},
   }, {
     Header: 'Height',
     headerStyle: { backgroundColor: '#7dcdcb' },
     id: 'height',
     accessor: d =>  new Intl.NumberFormat('en-GB', {style:'decimal'}).format(d.height),
     style:{textAlign:"center"},
   }, {
     Header:'Difficulty',
     headerStyle: { backgroundColor: '#7dcdcb' },
     accessor: 'difficulty',
     Cell: props => formatDifficulty(props.value),
     style:{textAlign:"center"},
     width:100,

   },{
     Header: 'lastBeat',
     headerStyle: { backgroundColor: '#7dcdcb' },
     accessor: 'lastBeat',
     Cell: props => formatDate(props.value),
     style:{textAlign:"center"},
   },
 ]

  return(
      <div className="tableNodes">
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );
 }
}
export default ContainsTableR;
