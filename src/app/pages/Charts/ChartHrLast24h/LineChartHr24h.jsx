import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "../moduleGraph/LineChart24h.module.css";
import 'moment/locale/fr'  // without this line it didn't work
import moment from "moment";

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
        const {chartMin, chartMax}="";
        const { data,labels } = this.props;

        var now = moment();
        var yesterday=moment()-((3600*24)*1000);

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
                        fill: false,
                        borderColor: "#6da6d2"
                    }
                ]
            },
            options: {
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    max: 100000, //this.chartMax = Math.round((this.chartMax*1.2)/Math.pow(10,Math.round(Math.log10(this.chartMax))-1))*Math.pow(10,Math.round(Math.log10(this.chartMax))-1);
                    min: 0, //this.chartMin = Math.round((this.chartMin*0.55)/Math.pow(10,Math.round(Math.log10(this.chartMin))-1))*Math.pow(10,Math.round(Math.log10(this.chartMin))-1);
                  }
                }],
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
