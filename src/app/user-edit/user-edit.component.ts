import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Output() updateEdit = new EventEmitter<boolean>();
  constructor() { 
   }

  ngOnInit(): void {
  }
 
  submit(): void {
    this.updateEdit.emit(false)
   }

}
