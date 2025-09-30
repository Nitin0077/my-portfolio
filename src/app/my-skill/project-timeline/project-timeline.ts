import { Component } from '@angular/core';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highcharts-gantt';

@Component({
  selector: 'app-project-timeline',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './project-timeline.html',
  styleUrls: ['./project-timeline.css']
})
export class ProjectTimeline {
  Highchart: typeof Highcharts = Highcharts

  chartConstructor: ChartConstructorType = 'chart';
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    subtitle: {
      
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
      crosshair: true,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 metric tons (MT)'
      }
    },
    tooltip: {
      valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'JavaScript',
        type:'column',
        data: [387749, 280000, 129000, 64300, 54000, 34300]
      },
      {type:'column',
        name: 'TypeScript',
        data: [45321, 140000, 10000, 140500, 19500, 113500]
      }
    ]

  };
  

}
