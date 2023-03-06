import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Output() prevPage = new EventEmitter()
  @Output() nextPage = new EventEmitter()
  @Input() pageNo:number=1
  @Input() maxPageNo:number=10
  previous(){
    this.prevPage.emit()
  }
  next(){
    this.nextPage.emit()
  }
}
