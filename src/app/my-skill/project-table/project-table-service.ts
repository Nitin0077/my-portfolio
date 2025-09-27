import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface ProjectTech {
  name: string;
  icon: string;
  color: string;
}

export  interface Project {
  name: string;
  icon: string;
  color: string;
  tech: ProjectTech[];
  budget: string;
  completion: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectTableService {
  

  http=inject(HttpClient)

  getTableData():Observable<Project[]>{
    return this.http.get<Project[]>('data/project-table.json')
  }
}
