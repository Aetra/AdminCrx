import React from 'react';
import LineGraph from "./LineGraph";
import TestRequest from "./TestRequest";
import "./style.css";
class PCharts extends React.Component{

 render(){
   return(
    <div className="mt-2 charts">
    <TestRequest/>
      <div className="mt-3">
        <LineGraph/>
      </div>

    </div>

)}
}
export default PCharts;
