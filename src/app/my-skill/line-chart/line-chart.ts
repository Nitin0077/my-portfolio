import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-line-chart',
  imports: [HighchartsChartComponent],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css'
})
export class LineChart {

  HighChart:typeof Highcharts=Highcharts
  chartConstructor:ChartConstructorType='chart'
  chartOptions: Highcharts.Options = {
    title: {
        text: '',
        align: 'left'
    },

    yAxis: {
        title: {
            
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation & Developers',
        type:'line',
        data: [
            43934, 48656, 65165, 81827, 112143, 142383,
            171533,  168960, 171558
        ]
    }, {
        name: 'Manufacturing',
        type:'line',
        data: [
            23525,2334,35532,
            38121, 36885, 33726, 34243, 5666, 93099, 33473
        ]
    }, {
        name: 'Sales & Distribution',
        type:'line',
        data: [
           
            32147, 53215, 29243, 53215, 25663, 28978, 30618
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
  }



}
