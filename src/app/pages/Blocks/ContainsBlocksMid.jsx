import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


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
   /*
   const data = [
    {name: 'Tania', age:1, var:"18%"},
    {name: 'bania', age:3, var:"19%"},
    {name: 'sania', age:18, var:"15%"},
    {name: 'sania', age:23, var:"15%"},
    {name: 'sania', age:2, var:"15%"},
    {name: 'sania', age:25, var:"15%"},
    {name: 'sania', age:15, var:"15%"},
] */
   const columns = [{
   Header: 'Height',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'height', // String-based value accessors!

 }, {
   Header: 'Time Found',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'timestamp',
   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
 }, {
   Header:'Variance', // Custom header components!
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'difficulty'
 }]
   return(
      <div className="midBlocks">
      <h3> Recently Found Blocks </h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}/>
      </div>
   );
 }
}
export default ContainsBlocksMid;
