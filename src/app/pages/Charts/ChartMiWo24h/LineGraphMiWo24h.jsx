import React, { PureComponent } from 'react'
import Chart from "chart.js";
import {Line as LineChart} from 'chart.js';
import classes from "../moduleGraph/LineGraph24h.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraphMiWo24h extends PureComponent {
    chartRef = React.createRef();

    componentDidMount(){
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { dataM,dataW, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Workers",
                        yAxisID: 'Workers',
                        data: dataW,
                        fill: false,
                        borderColor: "#19c819"
                    },
                    {
                        label: "Miners",
                        yAxisID: 'Miners',
                        data: dataM,
                        fill: false,
                        borderColor: "#ffb455"
                    }
                ]
            },
            options: {
              responsive: true,
              scales: {
                  yAxes: [{
                    id: 'Workers',
                    type: 'linear',
                    position: 'left',
                  }, {
                    id: 'Miners',
                    type: 'linear',
                    position: 'right',

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
