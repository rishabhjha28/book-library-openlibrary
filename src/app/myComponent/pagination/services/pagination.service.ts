import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  pageNo=1
  increasePageNo(){
    this.pageNo++
  }
  decreasePageNo(){
    if(this.pageNo>1)
      this.pageNo--
  }
}
