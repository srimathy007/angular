import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  author:any;
    constructor(private ss:ServiceService) { }
  
    getAuthor():Observable<object>{
      return this.ss.get("http://localhost:4500/services")
    }
}