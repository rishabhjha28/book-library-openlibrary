import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchSubjectsService } from './services/search-subjects.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private subjectSearchServices:SearchSubjectsService){}
  @Output() bookToSearch = new EventEmitter()
  ngOnInit(){
    
  }
  subjects:Array<string>=["Javascript","Harry Potter","Indian History","Crypto currency","Criminal Law"] 
  searchControl = new FormControl()
  searchBook(book:string){
    this.bookToSearch.emit(book)
  }
  searchStatus:string = 'success'
  searchSubject($event: any){
    if($event.key === "Enter"){
      this.searchStatus = 'searching'
      this.subjectSearchServices.getSubject(this.searchControl.value).subscribe((subject:any)=>{
        let temp:Array<string> = []
        subject.works.forEach((element:any) => {
          temp.push(element.title)
        });
        this.subjects = temp
        this.searchStatus='success'
      })
    }
  }
}
