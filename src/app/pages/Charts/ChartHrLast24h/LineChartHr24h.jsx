import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "../moduleGraph/LineChart24h.module.css";
import 'moment/locale/fr'  // without this line it didn't work
import {formatHashrateApi} from '../../../helpers/helpers';
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//
export default class LineChartHr24h extends PureComponent {
    chartRef = React.createRef();
    componentDidMount() {
        this.buildChart();
    }
    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data,labels } = this.props;
        const min2=Math.min.apply(this,data);
        const max2=Math.max.apply(this,data);
        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels:labels,
                datasets: [
                    {
                        label: "hashrate",
                        data: data,
                        yAxisID: 'hashrates',
                        fill: false,
                        borderColor: "#6da6d2"
                    }
                ]
            },
            options: {
              spanGaps:true,
              responsive: true,
              tooltips: {
                 displayColors: false,
                 titleFontSize: 16,
                 bodyFontSize: 14,
                 xPadding: 10,
                 yPadding: 10,
                 callbacks: {
                     label: (tooltipItem, data) => {
                         return ` ${formatHashrateApi(tooltipItem.value)}`
                     }
                 }
            },
              scales: {
                yAxes: [{
                  id: 'hashrates',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    min:min2,
                    max:max2,
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
