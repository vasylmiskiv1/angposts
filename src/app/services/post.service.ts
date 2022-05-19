import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Data} from '../Data'

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiUrl = 'https://newsapi.org/v2'
  readonly API_KEY = '5801d47ecc8d4be5a5a769214bf25ecf'
  constructor(private http: HttpClient) { }

  getPostsByKeyword(value:string): Observable<Data> {
    let params = new HttpParams().set('q', value)
    let response = `${this.apiUrl}/everything?${params}&apiKey=${this.API_KEY}`;
    this.http.get<Data>(response)
    this.http.get<Data>(response).subscribe(data => console.log(data))
    return this.http.get<Data>(response)
  }
}
 