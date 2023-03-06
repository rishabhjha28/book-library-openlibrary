import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  @Input() subjectName = ""
  @Output() handleSearchBook = new EventEmitter()
  searchBook(book:string){
    this.handleSearchBook.emit(book)
  }
}
