import React from 'react';
import GraphHr24h from "./ChartHrLast24h/GraphHr24h";
import GraphMoyM from "./ChartMoyMounth/GraphMoyM";
import "./style.css";

class PCharts extends React.Component{

 render(){
   return(
    <div className="mt-2 charts">
      <div className="mt-2">
        <GraphHr24h/>
      </div>
    </div>

)}
}
export default PCharts;
