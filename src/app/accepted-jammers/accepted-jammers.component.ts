import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-accepted-jammers',
  templateUrl: './accepted-jammers.component.html',
  styleUrls: ['./accepted-jammers.component.css'],
  providers: [UserService]
})
export class AcceptedJammersComponent implements OnInit {

  public friends: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIncomingJammerProfiles().subscribe((data: any) => {
      console.log('friends', data)
      this.friends = data.data[0].attributes.connections
    })
  }

}
