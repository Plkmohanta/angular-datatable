import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<PeriodicElement> {
    return this.http.get<PeriodicElement>('https://jsonplaceholder.typicode.com/posts');
  }
}


export interface PeriodicElement {
  userId: number;
  id: number;
  title: string;
  body: string;
}
