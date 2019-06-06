import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "../moduleGraph/LineChart24h.module.css";
import 'moment/locale/fr'  // without this line it didn't work
import moment from "moment";
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
                        yAxisID: 'hashrate',

                        fill: false,
                        borderColor: "#6da6d2"
                    }
                ]
            },
            options: {
              responsive: true,
              scales: {
                yAxes: [{
                  id: 'hashrate',
                  type: 'linear',
                  position: 'left',
                  ticks:{
                    min:0,
                    max:100000,
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
