import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UserInfoService, UserCard } from './user-info-service';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';
import { CommonModule } from '@angular/common';

interface CardWithChart extends UserCard {
  sparkOptions: Highcharts.Options;
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  templateUrl: './user-info.html',
  styleUrls: ['./user-info.css'],
  imports: [CommonModule, HighchartsChartComponent]
})
export class UserInfo implements OnInit {
  /** 👉 no @Input — just internal state */
  info: number[] = [];
  ChartColor=''
  ChartTitle=''
  cards: CardWithChart[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: ChartConstructorType = 'chart';
  fullChartOptions: Highcharts.Options = {};

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe({
      next: (data: UserCard[]) => {
        this.cards = data.map(card => ({
          ...card,
          sparkOptions: this.buildSparkOptions(card)
        }));
      },
      error: err => console.error('User info fetch error:', err)
    });
  }

  private buildSparkOptions(card: UserCard): Highcharts.Options {
    return {
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        margin: [0, 0, 0, 0],
        height: 40
      },
      title: { text: '' },
      credits: { enabled: false },
      legend: { enabled: false },
      xAxis: { visible: false },
      yAxis: { visible: false },
      tooltip: { enabled: false },
      plotOptions: {
        areaspline: {
          lineWidth: 1,
          fillOpacity: 0.25,
          marker: { enabled: false }
        }
      },
      series: [
        {
          type: 'areaspline',
          data: card.spark || [],
          color: card.color
        }
      ]
    };
  }
buildFullChartOptions(): void {
    this.fullChartOptions = {
      chart: { type: 'line' },
      title: { text: this.ChartTitle },
      xAxis: { categories: this.info.map((_, i) => `Point ${i + 1}`) },
      yAxis: { title: { text: 'Value' } },
      series: [{ type: 'line', data: this.info ,color:this.ChartColor}]
    };
  }

  openModal(title:string,data: number[],color:string) {
    this.info = data;
    this.ChartColor=color
    this.ChartTitle=title
    this.buildFullChartOptions(); // prepare options before showing modal
  }

  closeModal() {
    this.info = [];
  }
}

