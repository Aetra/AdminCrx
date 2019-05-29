import React from 'react';
import ChartsHr24 from "./ChartsHr24";
import testRequest from "./testRequest";

class PCharts extends React.Component{

 render(){
   return(
     <div className="charts">
        <testRequest/>
       <ChartsHr24/>

    </div>
   );}
}
export default PCharts;
