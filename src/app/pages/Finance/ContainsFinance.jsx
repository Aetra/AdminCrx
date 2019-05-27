import React from 'react';
import './style.css';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatBalance} from '../../helpers/helpers';

  class ContainsFinance extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       postsEtbh:[],
       postsPay:[],
       postsStats:[],
     };
  }

axiosResult(){
  function getEthbtc() {
      return axios.get(config.get("URL")+"currencies/ticker/ethbtc");
    }
    function getPayment(){
          return axios.get(config.get("URL")+"admin/finances");
    }
    function getStatsPool(){
          return axios.get(config.get("URL")+"admin/stats");
    }

    var that=this;
    axios.all([getEthbtc(),getPayment(),getStatsPool()])
      .then(axios.spread(function (ethbtc, payments, statsPool) {
        if (ethbtc.status || payments.status === 200) {
          that.setState({postsEtbh:ethbtc.data});
          that.setState({postsPay:payments.data});
          that.setState({postsStats:statsPool.data});
        }
        else{
          throw new Error("Error");
        }

      }))
      .catch(error => {
        console.log("api error:" + error);
        throw error;
      });
    }
    componentDidMount(){
      this.axiosResult = this.axiosResult.bind(this);
      this.axiosResult();
      this.interval=setInterval(this.axiosResult, config.get("refreshIntervalUsers"))
    }

    componentWillUnmount() {
       clearInterval(this.interval);
       this.setState({postsEtbh:[],postsPay:[],postsStats:[],})
    }

 render(){
   /** Part NiceHash */
   const postsStat=this.state.postsStats;
   var diff=0;
   if(postsStat.nodes && postsStat.nodes.length>0){
     diff=postsStat.nodes[0].difficulty;
   }
   const postsEthbc=this.state.postsEtbh.value;
   var mined = 1000000000000 * 86400 * 2040000000 / diff;
   var minedBtc = mined*postsEthbc;
   var result = {brut:0,net:0};
   result.brut = formatBalance(minedBtc);
   result.net = formatBalance(minedBtc-6.5/100*minedBtc);

   /**Part finance */
   const postsPayd=this.state.postsPay;
   var fee,feePaid,paid,pendingBalance,allBalance=0;

   if(postsPayd.finances){
     pendingBalance=formatBalance(postsPayd.pendingBalance);
     allBalance=formatBalance(postsPayd.allBalance);
     if(postsPayd.finances.stats){
       fee=formatBalance(postsPayd.finances.stats.fee);
       feePaid=formatBalance(postsPayd.finances.stats.feePaid);
       paid=formatBalance(postsPayd.finances.stats.paid);
     }
   }

   return(
      <div className="homee justify-content-center">
        <div className="mt-5 row">
          <div className="col-6">
            <h1 className="mt-3 text-center font-weight-light"> Cruxpool Finance </h1>
            <hr className=" styleHr"/>
              <div className="mt-4 row">
                <div className="col-4 offset-2">
                  <p className="text-left"> Fee balance: </p>
                </div>
                <div className="col-3">
                  <p className="text-right">{fee} ETH </p>
                </div>
              </div>
            <div className="row">
              <div className="col-4 offset-2">
                <p className="text-left"> FeePaid:</p>
              </div>
              <div className="col-3">
                <p className="text-right"> {feePaid} ETH </p>
              </div>
            </div>

            <div className="row">
              <div className="col-4 offset-2">
                <p className="text-left">Total paid:</p>
              </div>
              <div className="col-3">
                <p className="text-right">{paid} ETH</p>
              </div>
            </div>

            <div className="row">
              <div className="col-4 offset-2">
                <p className="text-left"> Pending balance: </p>
              </div>
              <div className="col-3">
                <p className="text-right">{pendingBalance} ETH</p>
              </div>
            </div>

            <div className="row">
              <div className="col-4 offset-2">
                <p className="text-left"> Global balance: </p>
              </div>
              <div className="col-3">
                <p className="text-right">{allBalance} ETH</p>
              </div>
            </div>
          </div>

          <div className="col-5">
            <h1 className="mt-3 text-center font-weight-light"> NiceHash Analysys</h1>
              <hr className=" styleHr"/>
            <div className="mt-4 row">
              <div className="col-4 offset-2">
                <p className="text-left"> Nicehash rentability: </p>
              </div>
              <div className="col-5">
                <p className="text-right">{result.brut} BTC/TH/Day</p>
              </div>
            </div>

            <div className="row">
              <div className="col-4 offset-2">
                <p className="text-left"> Nicehash net rentability: </p>
              </div>
              <div className="col-5">
                <p className="text-right">{result.net} BTC/TH/Day</p>
              </div>
            </div>
          </div>
        </div>

    </div>
   );
 }
}
export default ContainsFinance;
