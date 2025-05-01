import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filteredValue: string = "";

  constructor(private courseService : CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    })
  }

  applyFilter(): void {
    this.filteredCourses = this.courses.filter((data) =>
      data.coursename.toLowerCase().includes(this.filteredValue.toLowerCase())
    )
  }

}
