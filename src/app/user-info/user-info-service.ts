import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface UserCard {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  color: string;
  spark:number[]
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http:HttpClient){}

  getUserInfo():Observable<UserCard[]>{
    return this.http.get<UserCard[]>('data/user-info.json')
  }
  
}
