import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";

export default class Dashboard extends Component {
    state = {
        posts:[],
        labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

      axiosResult(){
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
      if(this.state){
        if(this.state.posts[0]){
          console.log(this.state.posts[0].hashrate);
        }
      }
        const { posts, labels } = this.state;
        return (
            <div className={classes.container}>
            <header>
                <h1>Sales Dashboard</h1>
            </header>
                <LineGraph
                    data={posts}
                    labels={labels} />
            </div>
        )
    }
}
