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
     };
  }




//fee feePaid paid ethbtc
/* https://cruxpool.com/admin/finances
https://cruxpool.com/currencies/ticker/ethbtc
*/
componentDidMount(){
  function getEthbtc() {
      return axios.get(config.get("URL")+"currencies/ticker/ethbtc");
    }

  function getPayment(){
        return axios.get(config.get("URL")+"admin/finances");
      }
      
    var that=this;
    axios.all([getEthbtc(),getPayment()])
      .then(axios.spread(function (ethbtc, payments) {
        if (ethbtc.status || payments.status === 200) {
          console.log("oui")
          that.setState({postsEtbh:ethbtc.data});
          that.setState({postsPay:payments.data});
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

 render(){
   const postsEthbc=this.state.postsEtbh.value;
   const postsPayd=this.state.postsPay;
   console.log(postsPayd.finances)
   console.log(postsPayd)
   var balance=0;
   var fee=0;
   var feePaid=0;
   var paid=0;

   if(postsPayd.finances && postsPayd.finances ){
     if(postsPayd.finances.stats){
       fee=formatBalance(postsPayd.finances.stats.fee);
       feePaid=formatBalance(postsPayd.finances.stats.feePaid);
       paid=formatBalance(postsPayd.finances.stats.paid);
     }
     console.log(this.postsPayd)
   }
   return(
      <div className="homee justify-content-center">
          <div className="row">
            <div className="col-6">
              <p className="text-left"> Fee: </p>
            </div>
            <div className="col-6">
              <p className="text-right">{fee} </p>
            </div>
          </div>
        <div className="row">
          <div className="col-6">
            <p className="text-left"> FeePaid:</p>
          </div>
          <div className="col-6">
            <p className="text-right"> {feePaid} </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="text-left"> Paid:</p>
          </div>
          <div className="col-6">
            <p className="text-right">{paid}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="text-left"> Ethbtc: </p>
          </div>
          <div className="col-6">
            <p className="text-right">{postsEthbc}</p>
          </div>
        </div>
    </div>
   );
 }
}
export default ContainsFinance;
