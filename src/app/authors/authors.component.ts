import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JoinService } from 'src/app/connect/join.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private js:JoinService) { }

  ngOnInit(): void {
    this.js.getauthors().subscribe({
      next:(data:any)=>this.authors=data,
      error:(error:any)=>this.authors=[]
    })
  }

}

