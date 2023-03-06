import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from './books';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  constructor(){}
  @Input() books:Books[]=[]
  @Input() searchStatus:string=""
  @Input() pageNo:number=1
  @Input() maxPageNo:number=10
  @Output() prevPage =  new EventEmitter()
  @Output() nextPage =  new EventEmitter()

  prev(){
    this.prevPage.emit()
  }
  next(){
    this.nextPage.emit()
  }
}
