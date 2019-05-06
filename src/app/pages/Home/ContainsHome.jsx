import React from 'react';
import './styleHome.css';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatHashrate} from '../../helpers/helpers';
import {variance} from '../../helpers/helpers';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


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
   var shar=0;
   var vari=0;
   console.log(this.state);
   if(posts.nodes && posts.nodes.length>0){
     console.log(posts.nodes[0].difficulty);
     console.log(posts.stats.roundShares);
     diff=posts.nodes[0].difficulty;
     shar=posts.stats.roundShares;
     vari=variance(diff,shar).toFixed(0);
   }
   console.log(vari);


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
