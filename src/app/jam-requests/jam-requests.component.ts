import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
interface Instruments {
  id: number, 
  name: string
}
interface Requests {
  id: number,
  name: string,
  about: string,
  zipcode: number,
  picture_url: string,
  instruments: Instruments[],
  needs_instruments: object[],
  genres: Instruments[]
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

  public instruments: any;
  public genres: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getIncomingJammerProfiles().subscribe((data: any) => {
      this.requests = data.data.attributes.requests_pending
      console.log(this.requests)
      this.instruments = this.requests.map((request) => {
        request.instruments
      this.genres = this.requests.map((request) => {
        request.genres
      })
      })
      
    })
    
    
  }
    
    

  acceptJammer(id: number) {
    this.userService.acceptRequest(id).subscribe((data: any) => {
      console.log('patch response: ', data)
      
    })
  }

  acceptJammer(id: number) {
    this.userService.acceptRequest(id).subscribe((data: any) => {
      console.log('patch response: ', data)
      
    })
  }

}
