import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
httpOptions:any;
  constructor(private http:HttpClient) { }

  getauthors():Observable<object>{
    return this.http.get("http://localhost:4000/api/all")
  }
}