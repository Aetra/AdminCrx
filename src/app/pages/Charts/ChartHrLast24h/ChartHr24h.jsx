import React, { Component } from 'react';
import classes from "../moduleGraph/Dashboard24h.module.css";
import LineChartHr24h from "./LineChartHr24h";
import axios from 'axios';
import moment from "moment";
import config from '../../../.././config1.js';
import 'moment/locale/fr';
 class ChartHr24h extends Component {
  constructor(props) {
  super(props);
  this.state={
     posts:[],
     labels:[]
   };
}
      componentDidMount(){
       axios.get(config.get("URLAPIGRAPH")+"24h")
            .then(response=>{
              if (response.status === 200) {
                if(response.data){
                  var hr = Object.keys(response.data).map((value) => {
                        let m = response.data[value].hashrate;
                        return m;
                });
                  var ts = Object.keys(response.data).map((value) => {
                        let m = response.data[value].timestamp;
                        m=moment(m*1000).format('LTS');
                        return m;
                  });
                }
                this.setState({posts:hr});
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
      const data=this.state.posts;
      const labels=this.state.labels;
        return (
            <div className={classes.container}>
            <header>
                <h1 className='font-weight-light'>Hashrate of last 24 hours</h1>
            </header>
                <LineChartHr24h
                  data={data}
                  labels={labels}/>
            </div>
        )
    }
}
export default ChartHr24h;
