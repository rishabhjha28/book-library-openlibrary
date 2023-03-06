import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SearchSubjectsService {
  constructor(private http:HttpClient) { }
  searchControl = new FormControl()
  getSubject(subject:string){
    return this.http.get(`https://openlibrary.org/subjects/${subject.toLowerCase()}.json`)
  }
}
