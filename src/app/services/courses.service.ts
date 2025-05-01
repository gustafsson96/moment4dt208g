import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url: string = '/ramschema.json';

  constructor(private http: HttpClient) { }

  // Get courses
  getCourses() : Observable<any[]> {
    return this.http.get<any>(this.url);
  }
}
