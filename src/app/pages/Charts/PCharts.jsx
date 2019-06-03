import React from 'react';
import LineGraph from "./LineGraph";
import GraphHr24h from "./GraphHr24h.jsx";
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
