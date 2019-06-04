import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import 'react-table/react-table.css';
import {formatHashrate} from '../../helpers/helpers'


  class ContainsMinersTop extends React.Component{
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
            this.setState({posts:response.data})
            return response.data;
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
    this.interval=setInterval(this.axiosResult, config.get("refreshInterval"))
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({posts:[],})
  }

 render(){
   const {posts}=this.state;
   const hashratev=formatHashrate(posts.hashrate);

   return(
      <div className="topMiners text-center">
        <h4 className="">Total Hashrate: {hashratev} </h4>
        <h4 className="">Total Workers: {posts.workersTotal} </h4>
        <h4 className="">Total Miners: {posts.minersTotal} </h4>
      </div>
   );}
}
export default ContainsMinersTop;
