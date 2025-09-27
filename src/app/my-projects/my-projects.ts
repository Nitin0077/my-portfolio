import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.css'
})
export class MyProjects {
   projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.vercelToken}`
    });

    this.http
      .get<any>('https://api.vercel.com/v9/projects', { headers })
      .subscribe({
        next: (res) => {
          this.projects = res.projects; // array of your projects
        },
        error: (err) => console.error('Vercel API error', err)
      });
  }
}