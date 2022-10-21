import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() edit= Boolean
  constructor() { 
   }

  ngOnInit(): void {
  }

}
