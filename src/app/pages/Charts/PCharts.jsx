import React from 'react';
import GraphHr24h from "./ChartHrLast24h/GraphHr24h";
import GraphMiWo24h from "./ChartMiWo24h/GraphMiWo24h";
import GraphMoyM from "./ChartMoyMounth/GraphMoyM";
import GraphAll from "./ChartAll/GraphAll";


import "./style.css";

class PCharts extends React.Component{

 render(){
   return(
    <div className="container-fluid charts">
      <div className="row">
        <div className="col-6">
          <GraphHr24h/>
        </div>
        <div className="col-6">
          <GraphMiWo24h/>
        </div>
      </div>
      <div className="mt-3">
        <GraphMoyM/>
      </div>
      <div className="mt-3">
        <GraphAll/>
      </div>
    </div>

)}
}
export default PCharts;
