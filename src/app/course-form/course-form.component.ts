import { Component, OnInit } from '@angular/core';

export interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories: Category[] = [{ id: 1, name: 'Art' }, { id: 2, name: 'Technology' }, { id: 3, name: 'Marketing' }];

  submit(form) {
    console.log(form.value);
  }
}
