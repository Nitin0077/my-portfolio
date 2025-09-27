import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-skills-chart',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './skills-chart.html',
  styleUrls: ['./skills-chart.css']
})
export class SkillsChart {
  Highcharts = Highcharts;
  chartConstructor: ChartConstructorType = 'chart';
  chartOptions: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text:''},
    tooltip: {
      useHTML: true,
      pointFormat:
        '<b>{point.name}</b>: {point.y}%<br>' +
        'Level: {point.custom.level}<br>' +
        'Experience: {point.custom.years} yrs'
    },
    plotOptions: {
      pie: {
        ...({ colorByPoint: true } as any),
        dataLabels: { enabled: true },
        point: {
          events: {
            click: function () {
              console.log('Clicked slice:', this.name, this.options.custom);
            }
          }
        }
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'HTML', y: 20, custom: { level: 'Expert', years: 4 } },
        { name: 'CSS', y: 20, custom: { level: 'Expert', years: 4 } },
        { name: 'JavaScript', y: 20, custom: { level: 'Advanced', years: 3 } },
        { name: 'Angular', y: 20, custom: { level: 'Advanced', years: 3 } },
        { name: 'TypeScript', y: 10, custom: { level: 'Intermediate', years: 2 } },
        { name: 'Node.js', y: 10, custom: { level: 'Intermediate', years: 2 } }
      ]
    }]
  };
}
  