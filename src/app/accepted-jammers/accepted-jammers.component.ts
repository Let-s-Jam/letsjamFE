import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';


interface Friend {
  id: number,
  name: string,
  display_email: string,
  about: string,
  zipcode: number,
  picture_url: string,
  instruments: object[],
  needs_instruments: object[],
  genres: object[]
}

@Component({
  selector: 'app-accepted-jammers',
  templateUrl: './accepted-jammers.component.html',
  styleUrls: ['./accepted-jammers.component.css'],
  providers: [UserService]
})
export class AcceptedJammersComponent implements OnInit {

  public friends: Friend[] = [{
    id: 0,
    name:"",
    display_email: "",
    about: "",
    zipcode: 0,
    picture_url: "",
    instruments: [],
    needs_instruments: [],
    genres: [],

  }];
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIncomingJammerProfiles().subscribe((data:any) => {
      console.log('friends', data)
      this.friends = data.data.attributes.connections
    })
  }

}


