import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http : HttpClient) { }
  getPosts(){
    return this.http.get(this.url);
   }
}
