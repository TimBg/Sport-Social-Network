import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import s from './LineChart.module.css';

const chartData = (): Object => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Your progress before using SportStats',
                labels: { fontColor: "212121" },
                fillColor: 'rgba(151,187,205,1)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(0, 0, 0, 1)',
                pointStrokeColor: '#212121',
                pointHighlightFill: '#212121',
                pointHighlightStroke: '#212121',
                pointBorderColor:'#212121',
                pointBackgroundColor:'#212121',
                pointRadius: '2.5',
                data: [40, 20, 30, 5, 25, 20, 30],
            },
            {
                label: 'And after...',
                fontColor: '#212121',
                fillColor: 'rgba(151,187,205,1)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(0, 0, 0, 1);',
                pointStrokeColor: '#212121',
                pointHighlightFill: '#212121',
                pointHighlightStroke: '#212121',
                pointBorderColor:'#212121',
                pointBackgroundColor:'#212121',
                pointRadius: '2.5',
                data: [40, 48, 56, 64, 72, 80, 90],
            } 
        ]}
}

const options = {
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,1)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
        legend: {
            labels: {
                fontColor: 'black'
            }
        },
    scales: {
        yAxes: [
            {
                ticks: { fontColor: "#212121" },
                scaleLabel: { fontColor: "#212121" }
            }
        ],
        xAxes: [
            {
                ticks: { fontColor: "#212121" }
            }
        ]
    },
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
    graphContainer: {
        border: 'none',
        padding: '15px',
        background:'rgba(96, 125, 139, 1)'
    }
}

type StateType = {
    data: Object
}

class LineChartComponent extends React.Component<any, StateType> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            data: chartData()
        }
    }

    render() {
        return (
            <div className={s['line-chart']} style={styles.graphContainer}>
                <LineChart  data={this.state.data} 
                            options={options}
                            width={600} 
                            height={250}/>
            </div>
        )
    }
}

export default LineChartComponent;