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
     return variance(totSharesFirst,totDiffFirst).toFixed(1);
   }


   if(this.state.posts.candidates){
     var bT=this.state.posts.candidates.length;
     console.log(bT);
     function printList (list) {
      for (var i = 0; i < list.length; i++){
          var varianceTab= variance(list[i].shares,list[i].difficulty);
          console.log(parseFloat(varianceTab));
      }
    }
    printList(this.state.posts.candidates);
    console.log(this.varianceTab);
    var somme = 0;  // variable pour le resultat

     var b=this.state.posts.candidates[0].difficulty;
     var a=this.state.posts.candidates[0].shares;

     var b1=this.state.posts.candidates[1].difficulty;
     var a1=this.state.posts.candidates[1].shares;

     var b2=this.state.posts.candidates[2].difficulty;
     var a2=this.state.posts.candidates[2].shares;

     var b3=this.state.posts.candidates[3].difficulty;
     var a3=this.state.posts.candidates[3].shares;

     var b4=this.state.posts.candidates[4].difficulty;
     var a4=this.state.posts.candidates[4].shares;

     var b5=this.state.posts.candidates[5].difficulty;
     var a5=this.state.posts.candidates[5].shares;

     var b6=this.state.posts.candidates[6].difficulty;
     var a6=this.state.posts.candidates[6].shares;

     var b7=this.state.posts.candidates[7].difficulty;
     var a7=this.state.posts.candidates[7].shares;

     var var1=parseFloat(variance(a,b).toFixed(1));
     var var2=parseFloat(variance(a1,b1).toFixed(1));
     var var3=parseFloat(variance(a2,b2).toFixed(1));
     var var4=parseFloat(variance(a3,b3).toFixed(1));
     var var5=parseFloat(variance(a4,b4).toFixed(1));
     var var6=parseFloat(variance(a5,b5).toFixed(1));
     var var7=parseFloat(variance(a6,b6).toFixed(1));
     var var8=parseFloat(variance(a7,b7).toFixed(1));
     var ult=(var1+var2+var3+var4+var5+var6+var7+var8);
     var ult2=((var1+var2+var3+var4+var5+var6+var7+var8)/8);
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
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 16 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 32 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 64 </p>
          </div>
          <div className="col-6">
            <p>% </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 128 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 256 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 512 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 1024 </p>
          </div>
          <div className="col-6">
            <p> %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> Total: {bT} </p>
          </div>
          <div className="col-6">
            <p>%</p>
          </div>
        </div>

      </div>
   );}
}
export default ContainsBlocksRight;
