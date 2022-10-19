import { Component, OnInit } from '@angular/core';
import { JammerProfileComponent } from '../jammer-profile/jammer-profile.component';
import { AcceptedJammersComponent } from '../accepted-jammers/accepted-jammers.component';
import { JamRequestsComponent } from '../jam-requests/jam-requests.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
