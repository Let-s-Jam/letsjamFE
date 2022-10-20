import { Component, OnInit } from '@angular/core';
import { JammerProfileComponent } from '../jammer-profile/jammer-profile.component';
import { AcceptedJammersComponent } from '../accepted-jammers/accepted-jammers.component';
import { JamRequestsComponent } from '../jam-requests/jam-requests.component';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  public user: any 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUserProfile().subscribe((data: any) => {
      console.log(data)
      this.user = data.data[0].attributes
      console.log("username", this.user.name)
      })
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