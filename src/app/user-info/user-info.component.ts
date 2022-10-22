import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Output() updateEdit = new EventEmitter<boolean>();
  public user: any
  public instruments:any
  public genres:any
  constructor(private userService: UserService) { 

  }
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data: any) => {
      console.log('user profile', data)
      this.user = data.data[0].attributes
      console.log("username", this.user.name)
      this.instruments = data.data[0].attributes.instruments
      this.genres = data.data[0].attributes.genres
    })
  }
  switchView() {

    this.updateEdit.emit(true)
 }
}
