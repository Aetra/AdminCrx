import React from 'react';
import LineGraph from "./LineGraph";
import Graph from "./Graph.jsx";
import "./style.css";

class PCharts extends React.Component{

 render(){
   return(
    <div className="mt-2 charts">
      <div className="mt-3">
        <LineGraph/>
      </div>
      <div className="mt-2">
        <Graph/>
      </div>
    </div>

)}
}
export default PCharts;
