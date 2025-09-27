import { Component, inject, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SkillsChart } from "../skills-chart/skills-chart";
import { ProjectTimeline } from "../my-skill/project-timeline/project-timeline";
import { LineChart } from "../my-skill/line-chart/line-chart";
import { ProjectTable } from "../my-skill/project-table/project-table";
import { NgFor, NgIf } from '@angular/common';
import { UserInfo } from "../user-info/user-info";
import { Language, LanguageService } from './language';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [SkillsChart, ProjectTimeline, LineChart, ProjectTable, NgFor, UserInfo],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard implements OnInit {
  overviewLanguage: Language[] = []
  http=inject(HttpClient)
 languageService =inject(LanguageService)

  ngOnInit() {
    this.languageService.getLanguages().subscribe({
      next: (data) => this.overviewLanguage = data,
      error: (err) => console.error('Failed to load language data', err)

    });


    

  }

  

}