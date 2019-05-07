import React from 'react';
import './styleHome.css';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatHashrate,variance} from '../../helpers/helpers';

  class ContainsHome extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URL")+"admin/stats")
        .then(response=>{
          if (response.status === 200) {
            this.setState({posts:response.data});
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
   const {posts}=this.state;
   const hashratev=formatHashrate(posts.hashrate);
   var diff=0;
   var shares=0;
   var vari=0;
   if(posts.nodes && posts.nodes.length>0){
     diff=posts.nodes[0].difficulty;
     shares=posts.stats.roundShares;
     vari=variance(shares,diff).toFixed(0);
   }

   return(
      <div className="homee justify-content-center">
          <div className="row">
            <div className="col-6">
              <p className="text-left"> Pool Hashrate: </p>
            </div>
            <div className="col-6">
              <p className="text-right"> {hashratev} </p>
            </div>
          </div>
        <div className="row">
          <div className="col-6">
            <p className="text-left"> Miner:</p>
          </div>
          <div className="col-6">
            <p className="text-right"> {posts.minersTotal} </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="text-left"> workers:</p>
          </div>
          <div className="col-6">
            <p className="text-right">{posts.workersTotal}  </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
                <p className="text-left">
                Variance:
                </p>
          </div>
          <div className="col-6">
            <p className="text-right">{vari}% </p>
          </div>
        </div>
    </div>
   );
 }
}
export default ContainsHome;
