import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled:boolean=false
  @Input() title:string=""
  @Output() onClick = new EventEmitter()
  handleClick(){
    this.onClick.emit()
  }
}
