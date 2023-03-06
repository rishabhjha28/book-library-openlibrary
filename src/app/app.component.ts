import { Component } from '@angular/core';
import { Books } from './myComponent/main-content/books';
import { PaginationService } from './myComponent/pagination/services/pagination.service';
import { SearchBookService } from './myComponent/topbar/service/search-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-library';
  books:Books[]=[]
  constructor(private searchBookService:SearchBookService,private paginationService:PaginationService){}
  searchStatus:string = 'success'
  heading:string =""
  pageNo = 5
  maxPageNo:number = 0
  prevPage(){
    if(this.pageNo > 1){
      this.pageNo--;
      this.searchBook(this.heading,this.pageNo)
    }
  }
  nextPage(){
    if(this.pageNo < this.maxPageNo){
      this.pageNo++
      this.searchBook(this.heading,this.pageNo)
    }
  }
  searchBook(bookName:string=this.searchBookService.searchControl.value,pageNo:number = 1,){
    if(pageNo === 1){
      this.pageNo = 1
    }
    this.searchStatus='searching'
    this.heading=bookName
    this.searchBookService.getBook(bookName,pageNo).subscribe((book:any)=>{
      let temp:Books[] = []
      this.maxPageNo = Math.ceil(book.numFound/10)
      book.docs.forEach((b:any) => {
        let t1= b.publish_year?.sort()
        let t:Books = {
          author:b.author_name?b.author_name[0]:'Not Available',
          title:b.title,
          firstPublishYear:b.first_publish_year?b.first_publish_year:'-',
          latestPublishYear:t1?t1[t1.length-1]:'-'
        }
        temp.push(t)
      });
      this.searchStatus='success'
      this.books = temp
    })
  }
}
