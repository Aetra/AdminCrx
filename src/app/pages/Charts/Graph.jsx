import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import axios from 'axios';

 class Graph extends Component {
  constructor(props) {
  super(props);
  this.state={
     posts:[],
     labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   };
}


      componentDidMount(){
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

    render(){

        const labels = this.state.labels;
        var ui=this.state.posts;
        if(this.state){
          if(this.state.posts[0]){
            ui=this.state.posts[0].hashrate;
            var posts=this.state.posts[1].hashrate;
            console.log(this.state.posts[0].hashrate);
          }
        }

        console.log(ui);
        return (
            <div className={classes.container}>
            <header>
                <h1>Sales Dashboard</h1>
                <p>{ui}</p>
            </header>
                <LineGraph
                    data={ui}
                    labels={labels} />
            </div>
        )
    }
}
export default Graph;
