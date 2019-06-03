import React, { Component } from 'react';
import classes from "../Dashboard.module.css";
import LineGraphHr24h from "./LineGraphHr24h";
import axios from 'axios';
import {formatDate} from '../../../helpers/helpers';
import config from '../../../.././config1.js';


 class GraphHr24h extends Component {
  constructor(props) {
  super(props);
  this.state={
     posts:[],
     labels:[]
   };
}

      axiosResult(){
       axios.get("http://localhost:3000/ETH/history24h")
            .then(response=>{
              if (response.status === 200) {
                if(response.data){
                  var hr = Object.keys(response.data).map((value) => {
                        let m = response.data[value].hashrate;
                        return m;
                });
                var ts = Object.keys(response.data).map((value) => {
                      console.log("tt2");
                      let m = response.data[value].timestamp;
                      m=formatDate(m);
                      return m;
              });
                }
              // Sort miners by hashrat
                this.setState({posts:hr});
                this.setState({labels:ts});
                console.log(hr);
                console.log(ts);
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
        this.interval=setInterval(this.axiosResult, config.get("refreshIntervalGraph"))
      }

    render(){
      const data=this.state.posts;
      const labels=this.state.labels;
      console.log(labels);
        return (
            <div className={classes.container}>
            <header>
                <h1>Hashrate of last 24 hours</h1>
            </header>
                <LineGraphHr24h
                  data={data}
                  labels={labels}/>
            </div>
        )
    }
}
export default GraphHr24h;
