import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
   
   userEdit = ({
    name: "",
    display_email: "",
    zipcode: "",
    about: "",
    genre: [],
    played_instruments: []
  })

  @Output() updateEdit = new EventEmitter<boolean>();
  constructor(private userService: UserService) { 
   }

  ngOnInit(): void {
  }
 
  submit(): void {
    this.updateEdit.emit(false)
    console.log(this.userEdit.name, "name")
    this.userService.editProfile(this.userEdit)
    

   }
   

}
