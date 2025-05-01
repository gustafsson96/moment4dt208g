import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms';
import { Sort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSortModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [];

  // Filtering
  filteredCourses: Course[] = [];
  filteredValue: string = '';

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  // Filter by course name or code
  applyFilter(): void {
    const filter = this.filteredValue.toLowerCase();
    this.filteredCourses = this.courses.filter((course) =>
      course.coursename.toLowerCase().includes(filter) ||
      course.code.toLowerCase().includes(filter)
    );
  }

/**  
   * Regarding code below that makes up sorting functionality.
   * 
   * Copyright 2025 Google LLC. All Rights Reserved.  
   * Use of this source code is governed by an MIT-style license that  
   * can be found in the LICENSE file at https://angular.io/license  
   *  
   * Modified by Julia Gustafsson on 2025-05-01.    
*/

  // Sort based on selected column heading
  sortCourses(sort: Sort): void {
    const data = this.filteredCourses.slice();
    if (!sort.active || sort.direction === '') {
      this.filteredCourses = data;
      return;
    }

    // Perform selected sort
    this.filteredCourses = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code': return this.compare(a.code, b.code, isAsc);
        case 'name': return this.compare(a.coursename, b.coursename, isAsc);
        case 'progression': return this.compare(a.progression, b.progression, isAsc);
        default: return 0;
      }
    });
  }

  // Compare strings
  private compare(a: string, b: string, isAsc: boolean): number {
    return (a < b ? -1 : a > b ? 1 : 0) * (isAsc ? 1 : -1);
  }
}
