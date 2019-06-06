import React from 'react';
import ChartHr24h from "./ChartHrLast24h/ChartHr24h";
import ChartMiWo24h from "./ChartMiWo24h/ChartMiWo24h";
import ChartMoyM from "./ChartMoyMounth/ChartMoyM";
import ChartAllWoMi from "./ChartAll/ChartAllWoMi";
import ChartAllHr from "./ChartAllHr/ChartAllHr";




import "./style.css";

class PCharts extends React.Component{

 render(){
   return(
    <div className="container-fluid charts">
      <div className="row">
        <div className="col-lg-6 col-12">
          <ChartHr24h/>
        </div>
        <div className="col-lg-6 col-12">
          <ChartMiWo24h/>
        </div>
      </div>
      <div className="col-12 mt-3">
        <ChartMoyM/>
      </div>
      <div className="col-12 mt-3">
        <ChartAllWoMi/>
      </div>

      <div className="col-12 mt-3">
        <ChartAllHr/>
      </div>
    </div>

)}
}
export default PCharts;
