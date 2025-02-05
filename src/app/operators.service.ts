import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(private _httpClient:HttpClient) { }

  getUser():Observable<any>{
  return this._httpClient.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  getPosts():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/posts?userId=1");
  }
}
