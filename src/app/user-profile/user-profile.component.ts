import { ApplicationRef, Component, OnInit } from '@angular/core';
import { JammerProfileComponent } from '../jammer-profile/jammer-profile.component';
import { AcceptedJammersComponent } from '../accepted-jammers/accepted-jammers.component';
import { JamRequestsComponent } from '../jam-requests/jam-requests.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserService } from '../services/user-service';

 @Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  public user: any 
  public edit = false;
  constructor(private userService: UserService) { 
  
  }

  ngOnInit(): void {
      this.userService.getUserProfile().subscribe((data: any) => {
      this.user = data.attributes
      })
    
  }

  updateEdit(value: boolean): void {
    this.edit = value
  }
}
