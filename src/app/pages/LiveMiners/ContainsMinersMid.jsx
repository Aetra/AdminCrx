import React from 'react';
import axios from 'axios';
import config from '../../.././config1.js';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {formatDate,formatHashrate,workersLength} from '../../helpers/helpers';

  class ContainsMinersMid extends React.Component{
    constructor(props) {
    super(props);
    this.state={
       posts:[],
     };
  }

  axiosResult(){
   axios.get(config.get("URL")+"admin/miners")
        .then(response=>{
          if (response.status === 200) {
            // Convert map to array
            response.data.miners = Object.keys(response.data.miners).map((value) => {
              let m = response.data.miners[value];
              m.login = value;
              return m;
              });

            // Sort miners by hashrate
            response= response.data.miners.sort((a, b) => {
              if (a.hr < b.hr) {
                return 1;
              }
              if (a.hr > b.hr) {
                return -1;
              }
              return 0;
            });
              this.setState({posts:response})
              return response;
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
    this.interval=setInterval(this.axiosResult, config.get("refreshInterval"))
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({posts:[],})
  }

 render(){
   const columns = [{
   Header: 'Login',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor:'login',
   id: 'links',
   Cell: props =><a href={'http://www.cruxpool.com/#/miner/'+props.value} className="hash" target="_blank" rel="noopener noreferrer"> {props.value}</a>,
   style:{textAlign:"center"},
 },{

   Header: 'Hashrate',
   headerStyle: { backgroundColor: '#7dcdcb' },
   accessor: 'hr',
   style:{textAlign:"center"},
   Cell: props => formatHashrate(props.value),
 },{

   Header:'Workers',
   headerStyle: { backgroundColor: '#7dcdcb' },
   style:{textAlign:"center"},
   id:'worker',
   width:100,
   maxWidth:100,
   minWidth:100,
   accessor: d => workersLength(d.Workers),
   Cell: props => (props.value),
},{
  Header:'LastBeat',
  headerStyle: { backgroundColor: '#7dcdcb' },
  accessor:('lastBeat'),
  style:{textAlign:"center"},
  Cell: props => formatDate(props.value),
  }]

   return(
      <div className="container-fluid midMiners">
      <h3 className="mt-3 font-weight-light"> Miners </h3>
      <ReactTable
        defaultPageSize={50}
        pageSizeOptions={[10,50,100, 200,300]}
        data={this.state.posts}
        columns={columns}
        NoDataText={"Please Wait"}/>
      </div>
   );}
}
export default ContainsMinersMid;
