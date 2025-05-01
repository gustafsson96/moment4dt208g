import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url: string = '/ramschema.json';

  constructor(private http: HttpClient) { }

  // Get courses
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
