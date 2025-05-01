import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [];

  constructor(private courseService : CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    })
  }

}
