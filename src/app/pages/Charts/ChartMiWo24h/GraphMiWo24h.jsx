import React, { Component } from 'react';
import classes from "../moduleGraph/Dashboard24h.module.css";
import LineGraphMiWo24h from "./LineGraphMiWo24h";
import axios from 'axios';
import config from '../../../.././config1.js';
import moment from "moment";

 class GraphMiWo24h extends Component {
  constructor(props) {
  super(props);
  this.state={
     postsW:[],
     postsM:[],
     labels:[]
   };
}
      componentDidMount(){
       axios.get("http://localhost:8080/ETH/history24h")
            .then(response=>{
              if (response.status === 200) {
                if(response.data){
                  //map
                  var  workers = Object.keys(response.data).map((value) => {
                        let m = response.data[value].workersT;
                        return m;
                  });
                  var miners = Object.keys(response.data).map((value) => {
                        let m = response.data[value].minersT;
                        return m;
                  });
                  var ts = Object.keys(response.data).map((value) => {
                        let m = response.data[value].timestamp;
                        m=moment(m*1000).format('h:mm:ss a');
                        return m;
                  });
                }
                this.setState({postsW:workers});
                this.setState({postsM:miners});
                this.setState({labels:ts});
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
      var d = '12/12/1955 12:00:00 AM';
d = d.split(' ')[0];
console.log(d);
      const dataM=this.state.postsM;
      const dataW=this.state.postsW;
      const labels=this.state.labels;
        return (
            <div className={classes.container}>
            <header>
                <h1 className='font-weight-light'>Workers & Miners of last 24 hours</h1>
            </header>
                <LineGraphMiWo24h
                  dataM={dataM}
                  dataW={dataW}
                  labels={labels}/>
            </div>
        )
    }
}
export default GraphMiWo24h;
