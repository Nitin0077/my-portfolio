import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';

@Injectable({ providedIn: 'root' })
export class LineService {
  private apiUrl = 'data/line-chart.json'; // or use a real API endpoint

  constructor(private http: HttpClient) {}

  fetchChartData(): Observable<Highcharts.SeriesOptionsType[]> {
    return this.http.get<Highcharts.SeriesOptionsType[]>(this.apiUrl);
  }
}
