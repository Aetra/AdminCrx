import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import axios from 'axios';
import {formatDate} from '../../helpers/helpers';


 class GraphHr24h extends Component {
  constructor(props) {
  super(props);
  this.state={
     posts:[],
     labels:[]
   };
}


      componentDidMount(){
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

    render(){
      const data=this.state.posts;
      const labels=this.state.labels;
      console.log(labels);
        return (
            <div className={classes.container}>
            <header>
                <h1>Sales Dashboard</h1>
            </header>
                <LineGraph
                  data={data}
                  labels={labels}/>
            </div>
        )
    }
}
export default GraphHr24h;
