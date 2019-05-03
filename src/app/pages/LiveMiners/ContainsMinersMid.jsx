import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../../helpers/helpers';



  class ContainsMinersMid extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URL")+"admin/miners")
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

componentDidMount(){
  this.axiosResult = this.axiosResult.bind(this);
  this.axiosResult();
 setInterval(this.axiosResult, config.get("refreshInterval"))
}

 render(){
   const columns = [{
   Header: 'Login',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'login',
   id: 'links',
   style:{textAlign:"center"},
 }, {
   Header: 'Hashrate',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'hashrate',
   style:{textAlign:"center"},
 }, {
   Header:'Workers',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:('workers'),
},  {
  Header:'LastBeat',
  headerStyle: { backgroundColor: '#7dcdcb' },
  accessor:('lastBeat'),
/*  Cell: props => formatDate(props.value),*/

  }]

   return(
      <div className="midMiners">
      <h3 className="mt-5"> Recently Found Blocks </h3>
      <ReactTable
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );
 }
}
export default ContainsMinersMid;
