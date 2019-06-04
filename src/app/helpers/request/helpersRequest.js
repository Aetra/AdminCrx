import axios from 'axios';
import config from '../../.././config1.js';

export function getStatsMiners(posts){
  function axiosResult(){
   axios.get(config.get("URL")+"admin/miners")
        .then(response=>{
          if (response.status === 200) {
            this.setState({posts:response.data})
            return response.data;
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
  function componentDidMount(){
    this.axiosResult = this.axiosResult.bind(this);
    this.axiosResult();
    this.interval=setInterval(this.axiosResult, config.get("refreshInterval"))
  }

  function componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({posts:[],})
  }
}
