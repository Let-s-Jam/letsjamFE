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
      console.log('user profile', data)
      this.user = data.attributes
      // console.log("username", this.user.name)

      })
    
  }

  updateEdit(value: boolean): void {
    this.edit = value
  }
}
// public founds: any 

//   constructor(private userService: UserService) { 
//     //this adds userService obviously lol
//   }

//   // founds = FOUNDJAMMERS.data[0].results.found_users;

//   ngOnInit(): void {
//     this.userService.getJammers().subscribe((data: any) => {
//       console.log(data)
//       this.founds = data.data[0].results.found_users
//     })
//   }