import React, {Component} from 'react';
import Chart from 'react-apexcharts'
class RatingLineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [3, 5, 1, 4, 2, 5, 4, 5, 5]
            }],
            options: {
                chart: {

                    height: 200,
                    width:250,
                    type: 'line',
                    zoom: {
                        enabled: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                },
                title: {
                    text: 'Przebieg Oceny Specjalisty',
                    align: 'center'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 1
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                },
            },


        };
    }
    render() {
        return (
            <div id="chart" >
                <Chart options={this.state.options} series={this.state.series} type="line" height={240} width={400} />
            </div>
        );
    }
}

export default RatingLineChart;