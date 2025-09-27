import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Language {
  icon: string;
  color: string;
  name: string;
  des: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private jsonUrl = 'data/overview-language.json'; // path to the JSON

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.jsonUrl);
  }
}
