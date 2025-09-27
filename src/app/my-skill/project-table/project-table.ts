import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { Project, ProjectTableService } from './project-table-service';

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule
  ],
  templateUrl: './project-table.html',
  styleUrls: ['./project-table.css']
})
export class ProjectTable implements AfterViewInit {
  displayedColumns: string[] = ['project', 'tech', 'budget', 'completion'];
  showPopup:boolean=false;
  // form fields
  newProjectName = '';
  projectBudget = '';
  projectCompletion=0;

  /** MatTableDataSource for filtering, sorting, pagination */
  dataSource = new MatTableDataSource<Project>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private projectService: ProjectTableService) {}

  ngOnInit(): void {
    this.projectService.getTableData().subscribe({
      next: projects => (this.dataSource.data = projects),
      error: err => console.error('Fail to fetch data', err)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Global text filter */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPopup() { this.showPopup = true; }
  closePopup() { this.showPopup = false; }
  
  /** Add a new project row with minimal defaults */
  onNewProjectCreate() {
    if (!this.newProjectName.trim()) return;

    const newProject: Project = {
      name: this.newProjectName,
      budget: this.projectBudget,
      completion: this.projectCompletion,
      // minimal defaults for required fields you don’t want to input
      icon: '',
      color: '#666',
      tech: []
    };

    // use spread so MatTableDataSource notices the change
    this.dataSource.data = [newProject, ...this.dataSource.data];


    // reset form
    this.newProjectName = '';
    this.projectBudget = '';
    this.projectCompletion = 0;
    this.showPopup=false
  }
}
