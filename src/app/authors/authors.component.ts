
import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: string[];

  constructor(private authorsService: AuthorsService) {

  }

  ngOnInit() {
    this.authors = this.authorsService.getAuthors();
  }

}
