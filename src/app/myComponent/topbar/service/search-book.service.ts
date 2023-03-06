import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {
  constructor(private http:HttpClient) { }
  searchControl = new FormControl()
  getBook(book:string,page:number=1,perPage:number=10){
    return this.http.get(`https://openlibrary.org/search.json?page=${page}&limit=${perPage}&q=${book}`)
  }
}
