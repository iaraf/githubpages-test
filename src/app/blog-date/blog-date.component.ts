import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-date',
  templateUrl: './blog-date.component.html',
  styleUrls: ['./blog-date.component.css']
})
export class BlogDateComponent implements OnInit {
  blogs: any[] = [{ year: 2020, month: 1}, { year: 2020, month: 2}, { year: 2020, month: 3}, ];
  constructor() { }

  ngOnInit() {
  }

}
