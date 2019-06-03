import React, { Component } from 'react';
import classes from "../Dashboard.module.css";
import LineGraphAll from "./LineGraphAll";
import axios from 'axios';
import {formatDate} from '../../../helpers/helpers';
import config from '../../../.././config1.js';


 class GraphAll extends Component {
  constructor(props) {
  super(props);
  this.state={
     postsH:[],
     postsM:[],
     postsW:[],
     labels:[]
   };
}

      axiosResult(){
       axios.get("http://localhost:3000/ETH/history/totalLong")
            .then(response=>{
              if (response.status === 200) {
                if(response.data){
                  console.log("ui");
                  var moyHr = Object.keys(response.data).map((value) => {
                        let m = response.data[value].moyHrate;
                        return m;
                  });
                  var moyMiners = Object.keys(response.data).map((value) => {
                        let m = response.data[value].moyMiners;
                        return m;
                  });
                  var moyWorkers = Object.keys(response.data).map((value) => {
                        let m = response.data[value].moyWorkers;
                        return m;
                  });
                  var ts = Object.keys(response.data).map((value) => {
                        let m = response.data[value].timestamp;
                        m=formatDate(m);
                        return m;
                  });
                }
              // Sort miners by hashrat
                this.setState({postsH:moyHr});
                this.setState({postsM:moyMiners});
                this.setState({postsW:moyWorkers});
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
      componentDidMount(){
        this.axiosResult = this.axiosResult.bind(this);
        this.axiosResult();
        this.interval=setInterval(this.axiosResult, config.get("refreshIntervalGraph"))
      }


    render(){
      const data1=this.state.postsH;
      const data2=this.state.postsM;
      const data3=this.state.postsW;

      const labels=this.state.labels;
      console.log(labels);
        return (
            <div className={classes.container}>
            <header>
                <h1>Data of all time</h1>
            </header>
                <LineGraphAll
                  data={data1}
                  dataM={data2}
                  dataW={data3}
                  labels={labels}/>
            </div>
        )
    }
}
export default GraphAll;
