import React from 'react';
import './styleHome.css';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatHashrate} from '../../helpers/helpers';
import {variance} from '../../helpers/helpers';


  class ContainsHome extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       stats:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URLAPI")+"/pool/stats")
        .then(response=>{
          if (response.status === 200) {
            this.setState({stats:response.data.data})
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
   const {stats}=this.state;
   const hashratev=formatHashrate(stats.hashrate);
   console.log(stats);

   //const diff=stats.nodes.difficulty;
   //const share=stats.shares;
   //const vari=variance(diff,share);

   return(
      <div className="cruxServ justify-content-center">
        <h1 className="text-center"> Cruxpool Servers </h1>
          <hr className=" styleHr"/>
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
            <p className="text-right"> {stats.minersTotal} </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="text-left"> workers:</p>
          </div>
          <div className="col-6">
            <p className="text-right">{stats.workersTotal}  </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="text-left"> Variance:</p>
          </div>
          <div className="col-6">
            <p className="text-right"> </p>
          </div>
        </div>
    </div>
   );
 }
}
export default ContainsHome;
