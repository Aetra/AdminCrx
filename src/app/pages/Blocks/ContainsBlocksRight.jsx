import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import {luck} from '../../helpers/helpers';

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
     var list=this.state.posts.candidates;
     var bT=this.state.posts.candidates.length;

     var luck8 = luck(list.slice(0,8));
     var luck16 = luck(list.slice(0,16));
     var luck32 = luck(list.slice(0,32));
     var luck64 = luck(list.slice(0,64));
     var luck128 = luck(list.slice(0,128));
     var luck256 = luck(list.slice(0,256));
     var luck512 = luck(list.slice(0,512));
     var luck1024 = luck(list.slice(0,1024));
     var luckAll = luck(list);
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
            <p>{luck8} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 16 </p>
          </div>
          <div className="col-6">
            <p> {luck16} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 32 </p>
          </div>
          <div className="col-6">
            <p>{luck32} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 64 </p>
          </div>
          <div className="col-6">
            <p> {luck64} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 128 </p>
          </div>
          <div className="col-6">
            <p> {luck128} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 256 </p>
          </div>
          <div className="col-6">
            <p> {luck256} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 512 </p>
          </div>
          <div className="col-6">
            <p> {luck512} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> 1024 </p>
          </div>
          <div className="col-6">
            <p> {luck1024} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p> Total: {bT} </p>
          </div>
          <div className="col-6">
            <p> {luckAll} %</p>
          </div>
        </div>

      </div>
   );}
}
export default ContainsBlocksRight;
