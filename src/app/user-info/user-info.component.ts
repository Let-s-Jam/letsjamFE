import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() edit: any
  @Input() updateEdit: ((args: boolean) => void) | undefined;
  public user: any

  constructor(private userService: UserService) { 

  }
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data: any) => {
      console.log('user profile', data)
      this.user = data.data[0].attributes
      console.log("username", this.user.name)
    })
  }
  switchView() {
    this.edit = true
    this.updateEdit!(true)
    console.log(this.edit)
}
}
