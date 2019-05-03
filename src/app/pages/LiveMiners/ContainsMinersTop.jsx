import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate} from '../../helpers/helpers';
import {variance} from '../../helpers/helpers';


  class ContainsMinersTop extends React.Component{
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

 render(){
   return(
      <div className="topMiners">
      <h3 className=""> Total Hashrate: </h3>
      <h3 className="mt-2"> Total Miners: </h3>

      </div>
   );
 }
}
export default ContainsMinersTop;
