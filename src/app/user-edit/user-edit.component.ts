import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user-service';
import { HttpClient, HttpParams } from '@angular/common/http';
export interface updatedUser {
  name: string;
  display_email: string,
  zipcode: number,
  about: string,
  genres: object[],
  instruments: object[]
}
// const params = new HttpParams()
//   .set("attributes", userEdit)

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})

export class UserEditComponent implements OnInit {
   
  public userEdit: updatedUser = {
  name: "",
  display_email: "",
  zipcode: 0,
  about: "",
  genres: [],
  instruments: [],
}

  @Output() updateEdit = new EventEmitter<boolean>();
  constructor(private userService: UserService) { 
   }

  ngOnInit(): void {
  }
 
  submit(): void {
    this.updateEdit.emit(false)
    this.userService.updateProfile(this.userEdit).subscribe((data: any) => {
    this.updateEdit = data.data.attributes
    })
   }
   

}
