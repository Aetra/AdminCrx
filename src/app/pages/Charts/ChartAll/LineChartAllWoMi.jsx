import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "../moduleGraph/LineChart.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineChartAllWoMi extends PureComponent {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const {dataM,dataW, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                      label:"Average Miners",
                      yAxisID: 'Miners',
                      data: dataM,
                      fill: false,
                      borderColor: "#ffb455"
                    },
                    {
                      label:"Average Workers",
                      yAxisID: 'Workers',
                      data: dataW,
                      fill: false,
                      borderColor: "#19c819"
                    }
                ]
            },
            options: {
              spanGaps:true,
               responsive: true,
               scales: {
                   yAxes: [{
                     id: 'Workers',
                     type: 'linear',
                     position: 'left',
                     gridLines: {
                       display:false,
                    },
                   },
                    {
                     id: 'Miners',
                     type: 'linear',
                     position: 'right',
                      ticks:{
                        maxTicksLimit:20,
                      }
                   }]
                 }
            }
        });
    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
