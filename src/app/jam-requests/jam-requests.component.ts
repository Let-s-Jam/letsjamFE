import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

interface Requests {
  id: number,
  name: string,
  about: string,
  zipcode: number,
  picture_url: string,
  instruments: object[],
  needs_instruments: object[],
  genres: object[]
}

@Component({
  selector: 'app-jam-requests',
  templateUrl: './jam-requests.component.html',
  styleUrls: ['./jam-requests.component.css'],
  providers: [UserService]
})
export class JamRequestsComponent implements OnInit {

  public requests: Requests[] = [{
    id: 0,
    name:"",
    about: "",
    zipcode: 0,
    picture_url: "",
    instruments: [],
    needs_instruments: [],
    genres: [],
  }];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIncomingJammerProfiles().subscribe((data: any) => {
      console.log('requests', data)
      this.requests = data.data.attributes.requests_pending
    })
  }

  acceptJammer(id: number) {
    this.userService.acceptRequest(id).subscribe((data: any) => {
      console.log('patch response: ', data)
      
    })
  }

}
