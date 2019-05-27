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

   if(this.state.posts.candidates){
     var varianceTab,varianceTab1,varianceTab2,varianceTab3,varianceTab4,varianceTab5,varianceTab6,varianceTab7,varianceTabT;
     var bT=this.state.posts.candidates.length;
     var list=this.state.posts.candidates;
     var sum=0;
     var sum1=0;
     var sum2=0;
     var sum3=0;
     var sum4=0;
     var sum5=0;
     var sum6=0;
     var sum7=0;

     var sumT=0;


      for (var i = 0; i < list.length; i++){
        if(i<8){
          varianceTab=variance(list[i].shares,list[i].difficulty);
          sum+=varianceTab;
        }
        if(i<16){
          varianceTab1=variance(list[i].shares,list[i].difficulty);
          sum1+=varianceTab1;
        }
        if(i<32){
          varianceTab2=variance(list[i].shares,list[i].difficulty);
          sum2+=varianceTab2;
        }
        if(i<64){
          varianceTab3=variance(list[i].shares,list[i].difficulty);
          sum3+=varianceTab3;
        }
        if(i<128){
          varianceTab4=variance(list[i].shares,list[i].difficulty);
          sum4+=varianceTab4;
        }
        if(i<256){
          varianceTab5=variance(list[i].shares,list[i].difficulty);
          sum5+=varianceTab5;
        }
        if(i<512){
          varianceTab6=variance(list[i].shares,list[i].difficulty);
          sum6+=varianceTab6;
        }
        if(i<1024){
          varianceTab7=variance(list[i].shares,list[i].difficulty);
          sum7+=varianceTab7;
        }


        if(i<=bT)
        {
          varianceTabT=variance(list[i].shares,list[i].difficulty);
          sumT+=varianceTabT;
        }
      }
      sum=(sum/8).toFixed(1);
      sum1=(sum1/16).toFixed(1);
      sum2=(sum2/32).toFixed(1);
      sum3=(sum3/64).toFixed(1);
      sum4=(sum4/128).toFixed(1);
      sum5=(sum5/256).toFixed(1);
      sum6=(sum6/512).toFixed(1);
      sum7=(sum7/1024).toFixed(1);


      sumT=(sumT/bT).toFixed(1);
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
            <p>{sum}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 16 </p>
          </div>
          <div className="col-6">
            <p> {sum1}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 32 </p>
          </div>
          <div className="col-6">
            <p>{sum2}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 64 </p>
          </div>
          <div className="col-6">
            <p>{sum3}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 128 </p>
          </div>
          <div className="col-6">
            <p> {sum4}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 256 </p>
          </div>
          <div className="col-6">
            <p> {sum5}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 512 </p>
          </div>
          <div className="col-6">
            <p> {sum6}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 1024 </p>
          </div>
          <div className="col-6">
            <p> {sum7}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> Total: {bT} </p>
          </div>
          <div className="col-6">
            <p>{sumT}</p>
          </div>
        </div>

      </div>
   );}
}
export default ContainsBlocksRight;
