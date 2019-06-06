import React, { Component } from 'react';
import classes from "../moduleGraph/Dashboard.module.css";
import LineChartAllHr from "./LineChartAllHr";
import axios from 'axios';
import {formatDate} from '../../../helpers/helpers';
import config from '../../../.././config1.js';


 class ChartAllHr extends Component {
  constructor(props) {
  super(props);
  this.state={
     postsH:[],
     labels:[]
   };
 }

  componentDidMount(){
    axios.get(config.get("URLAPIGRAPH")+"/totalLong")
      .then(response=>{
        if (response.status === 200) {
          if(response.data){
            var moyHashrate = Object.keys(response.data).map((value) => {
              let m = response.data[value].moyHrate;
                return m;
              });

              var ts = Object.keys(response.data).map((value) => {
                let m = response.data[value].timestamp;
                m=formatDate(m);
                return m;
                  });
              }
                this.setState({postsH:moyHashrate});
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
      const dataH=this.state.postsH;
      const labels=this.state.labels;
        return (
            <div className={classes.container}>
            <header>
                <h1 className='font-weight-light'>Hashrate of all time</h1>
            </header>
                <LineChartAllHr
                  dataH={dataH}
                  labels={labels}/>
            </div>
        )
    }
}
export default ChartAllHr;
