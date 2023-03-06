import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Books } from '../main-content/books';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() books:Books[]=[]
  @Input() pageNo:number=1
  @Input() maxPageNo:number=10
  localBooks:Books[] = []
  ngOnChanges(changes:SimpleChanges){
    if(changes['books']){
      this.localBooks = changes['books'].currentValue
    }
  }
  @Output() prev = new EventEmitter()
  @Output() next = new EventEmitter()
  prevPage(){
    this.prev.emit()
  }
  nextPage(){
    this.next.emit()
  }
  sortBy = (field:string) => {
    this.books.sort((a:any, b:any) =>{
      if (a[field] > b[field]) return 1;
      else if (a[field] < b[field]) return -1;
      else return 0;
    });
  }

}
