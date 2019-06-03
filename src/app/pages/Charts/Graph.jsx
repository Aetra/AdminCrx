import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import axios from 'axios';

 class Graph extends Component {
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
                response.data = Object.keys(response.data.miners).map((value) => {
                  let m = response.data.miners[value];
                  m.login = value;
                  return m;
                  });                this.setState({labels:response.data});
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

        var labels=0;
        var len = 0;
        var sum = 0;
        if(this.state.posts){
          if (this.state.posts && this.state.posts.length > 0) {
              for (var i = 0; i<this.state.posts.length; i++) {
                  console.log("ui");
                  sum= this.state.posts[i].hashrate;
                  labels=this.state.posts[i].timestamp;
                   console.log(sum);
                   console.log(labels);
                  len++
              }
          }
        }

        return (
            <div className={classes.container}>
            <header>
                <h1>Sales Dashboard</h1>
            </header>
                <LineGraph
                  data={sum}
                  labels={labels}/>
            </div>
        )
    }
}
export default Graph;
