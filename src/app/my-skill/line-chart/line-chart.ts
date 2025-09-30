import { Component, OnInit, inject } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';
import { LineService } from './line-service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [HighchartsChartComponent],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css'
})
export class LineChart implements OnInit {

  HighChart: typeof Highcharts = Highcharts;
  chartConstructor: ChartConstructorType = 'chart';
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Dynamic Line Chart',
      align: 'left'
    },
    yAxis: {
      title: { text: '' }
    },
    xAxis: {
      accessibility: { rangeDescription: 'Range: 2010 to 2022' }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: { connectorAllowed: false },
        pointStart: 2010
      }
    },
    series: [], // filled from API
    responsive: {
      rules: [{
        condition: { maxWidth: 500 },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  // ✅ Use Angular inject() for service
  private getData = inject(LineService);

  ngOnInit() {
    this.loadChartData();
  }

  loadChartData() {
    this.getData.fetchChartData().subscribe({
      next: (data: any) => {
        console.log('API Data:', data); // should show { series: [...] }
        this.chartOptions.series = data.series; // ✅ correct assignment
        this.updateFlag = true; // force redraw
      },
      error: (err) => console.error('Failed to load chart data', err)
    });
  }
}
