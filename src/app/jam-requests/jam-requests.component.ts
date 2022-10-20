import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-jam-requests',
  templateUrl: './jam-requests.component.html',
  styleUrls: ['./jam-requests.component.css'],
  providers: [UserService]
})
export class JamRequestsComponent implements OnInit {

  public requests: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIncomingJammerProfiles().subscribe((data: any) => {
      console.log('requests', data)
      this.requests = data.data[0].attributes.connections_pending
    })
  }

}
