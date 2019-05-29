import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import {formatHashrate,variance} from '../../helpers/helpers';

  class TestRequest extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get("http://localhost:3000/ETH/history24h")
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
    this.interval=setInterval(this.axiosResult, config.get("refreshIntervalDiag"))
  }

  componentWillUnmount() {
     clearInterval(this.interval);
     this.setState({posts:[]})
  }

   render(){
     var hashratev=0;
     const {posts}=this.state;
     if(this.state){
       if(this.state.posts[0]){
         console.log(this.state.posts[0].hashrate);
         hashratev=this.state.posts[0].hashrate;
     }
  }
     if(posts.nodes && posts.nodes.length>0){

     }

     return(
        <div className="">
            <div className="row">
              <div className="col-6">
                <p className="text-left"> Pool Hashrate: </p>
              </div>
              <div className="col-6">
                <p className="text-right">{hashratev} </p>
              </div>
            </div>
        </div>
      )}
    }

export default TestRequest;
