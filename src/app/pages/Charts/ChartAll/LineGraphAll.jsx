import React, { PureComponent } from 'react'
import Chart from "chart.js";
import {Line as LineChart} from 'chart.js';
import classes from "../LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraphAll extends PureComponent {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data,dataM,dataW, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "hashrate",
                        data: data,
                        fill: false,
                        borderColor: "#6da6d2"
                    },
                    {
                      label:"Miners",
                      data: dataM,
                      fill: false,
                      borderColor: "#bbf755"
                    },
                    {
                      label:"Workers",
                      data: dataW,
                      fill: false,
                      borderColor: "#d26d6d"
                    }
                ]
            },
            options: {}
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
