import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchBookService } from './service/search-book.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  constructor(private searchBookServices:SearchBookService){}
  @Output() searchBook= new EventEmitter()
  @Input() heading:string=""
  bookController = this.searchBookServices.searchControl
  searchedBook($event:any){
    if($event.key==="Enter"){
      this.searchBook.emit()
    }
  } 
}
