import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() edit = Boolean
  public user: any

  constructor(private userService: UserService) { 
    edit: this.edit;
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data: any) => {
      console.log('user profile', data)
      this.user = data.data[0].attributes
      console.log("username", this.user.name)
    })
  }
}
