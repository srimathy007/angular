import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../connect/service.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors:any;
  constructor(private ss:ServiceService ) { }

  ngOnInit(): void {
    this.ss.getAuthor().subscribe({
      next:(data:any)=>this.authors=data,
      error:(error:any)=>this.authors=[]
    })
  }

}

