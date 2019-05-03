import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import 'react-table/react-table.css';
import {formatHashrate} from '../../helpers/helpers'

  class ContainsMinersTop extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       stats:[],
     };
  }
  componentDidMount(){
   axios.get(config.get("URL")+"admin/miners")
        .then(response=>{
          if (response.status === 200) {
            this.setState({stats:response.data})
            console.log(response.data.hashrate);
            console.log(response.data.minersTotal);


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
   const {stats}=this.state;
   const hashratev=formatHashrate(stats.hashrate);

   return(
      <div className="topMiners text-center">
      <h4 className=""> Total Hashrate: {hashratev} </h4>
      <h4 className="mt-2"> Total Miners: {stats.minersTotal} </h4>

      </div>
   );
 }
}
export default ContainsMinersTop;
