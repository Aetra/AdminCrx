import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import {variance} from '../../helpers/helpers';

  class ContainsBlocksRight extends React.Component{
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
            this.setState({posts:response.data})
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

   function calcDiffShares(part){
     var totSharesFirst = part.reduce( function(tot, record) {
         return tot + record.shares;
     },0);

     var totDiffFirst = part.reduce(function(tot, record) {
        return tot + record.difficulty;
    },0);
     return variance(totSharesFirst,totDiffFirst).toFixed(0);
   }

   if(this.state.posts.candidates){
     var bT=this.state.posts.candidates.length;

    /** Calcul luck & break down array */
    var vari=calcDiffShares(this.state.posts.candidates.slice(0,8));
    var variFirst=calcDiffShares(this.state.posts.candidates.slice(0,16));
    var variSec=calcDiffShares(this.state.posts.candidates.slice(0,32));
    var variThird=calcDiffShares(this.state.posts.candidates.slice(0,64));
    var variFo=calcDiffShares(this.state.posts.candidates.slice(0,128));
    var variFif=calcDiffShares(this.state.posts.candidates.slice(0,256));
    var variSix=calcDiffShares(this.state.posts.candidates.slice(0,512));
    var variSeven=calcDiffShares(this.state.posts.candidates.slice(0,1024));
    var variEnd=calcDiffShares(this.state.posts.candidates.slice(0));


}

   return(
      <div className="col-4 midBlocks">
      <h3 className="mt-4 font-weight-light"> Luck on the last blocks found </h3>
        <div className="mt-2 row">
          <div className="col-6">
            <h4>Blocks</h4>
          </div>
          <div className="col-6">
            <h4>Luck</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 8 </p>
          </div>
          <div className="col-6">
            <p>{vari} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 16 </p>
          </div>
          <div className="col-6">
            <p>{variFirst} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 32 </p>
          </div>
          <div className="col-6">
            <p>{variSec} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 64 </p>
          </div>
          <div className="col-6">
            <p>{variThird}% </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 128 </p>
          </div>
          <div className="col-6">
            <p>{variFo} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 256 </p>
          </div>
          <div className="col-6">
            <p>{variFif} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 512 </p>
          </div>
          <div className="col-6">
            <p>{variSix} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 1024 </p>
          </div>
          <div className="col-6">
            <p>{variSeven} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> Total: {bT} </p>
          </div>
          <div className="col-6">
            <p>{variEnd}%</p>
          </div>
        </div>

      </div>
   );}
}
export default ContainsBlocksRight;
