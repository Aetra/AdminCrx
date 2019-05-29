import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";

export default class Dashboard extends Component {
    state = {
        posts:[],
        labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    render() {
      var hashratev=0;
      const {posts}=this.state;
      if(this.state){
        if(this.state.posts[0]){
          console.log(this.state.posts[0].hashrate);
          hashratev=this.state.posts[0].hashrate;
        }
      }
        const { posts, labels } = this.state;
        return (
            <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Sales Dashboard</h1>
            </header>
                <LineGraph
                    data={posts}
                    labels={labels} />
            </div>
        )
    }
}
