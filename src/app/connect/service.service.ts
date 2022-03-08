import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOptions:any;
    constructor(private http:HttpClient) { }
  
    getAuthor():Observable<object>{
      return this.http.get("http://localhost:4000/authorapi/books")
    }
}