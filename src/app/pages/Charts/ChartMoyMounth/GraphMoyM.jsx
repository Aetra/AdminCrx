import React, { Component } from 'react';
import classes from "../moduleGraph/Dashboard.module.css";
import LineGraphMoyM from "./LineGraphMoyM";
import axios from 'axios';
import config from '../../../.././config1.js';
import moment from "moment";
import 'moment/locale/fr'  // without this line it didn't work


 class GraphMoyM extends Component {
  constructor(props) {
  super(props);
  this.state={
     posts:[],
     labels:[]
   };
}

      componentDidMount(){
       axios.get("http://localhost:8080/ETH/history/mounth/1559563778")
            .then(response=>{
              if (response.status === 200) {
                if(response.data){
                  var moyhr = Object.keys(response.data).map((value) => {
                        let m = response.data[value].moyHrate;
                        return m;
                });
                var ts = Object.keys(response.data).map((value) => {
                      let m = response.data[value].timestamp;
                      moment.locale('fr');

                      m=moment(m*1000).format("dddd Do MMMM YY");
                      return m;
              });
                }
                this.setState({posts:moyhr});
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
                <h1 className='font-weight-light'>Average Hashrate per mounth</h1>
            </header>
                <LineGraphMoyM
                  data={data}
                  labels={labels}/>
            </div>
        )
    }
}
export default GraphMoyM;
