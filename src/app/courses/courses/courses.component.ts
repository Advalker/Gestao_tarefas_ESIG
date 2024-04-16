import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
    {
      _id: '1', name: 'Angula', category: 'frontend'
    },
    {
      _id: '2', name: 'Java', category: 'backend'
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = []
  }

}
