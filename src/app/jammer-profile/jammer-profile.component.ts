import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

interface SearchResults {
  id: number,
  name: string,
  about: string,
  zipcode: number,
  picture_url: string,
  instruments: object[],
  needs_instruments: object[],
  genres: object[]
}

interface Instruments {
  name: any,
  id: any
}

interface Genres {
  name: any,
  id: any
}

@Component({
  selector: 'app-jammer-profile',
  templateUrl: './jammer-profile.component.html',
  styleUrls: ['./jammer-profile.component.css'],
  providers: [UserService]
  //how we're telling the component that userservice should be created directly from the class
})
export class JammerProfileComponent implements OnInit {

public founds: SearchResults[] = [{
  id: 0,
  name:"",
  about: "",
  zipcode: 0,
  picture_url: "",
  instruments: [],
  needs_instruments: [],
  genres: []
}]

public instruments: any

public genres: any

  constructor(private userService: UserService) { 
    //this adds userService obviously lol
  }

  // founds = FOUNDJAMMERS.data[0].results.found_users;

  ngOnInit(): void {
    this.userService.getJammers().subscribe((data: any) => {
      console.log('search results', data)
      this.founds = data
      this.instruments = data.instruments
      this.genres = data.genres
    })
  }

  // data is the repsonse from the server

  //observables

  //found: foundJammers

}

//use a service to inject into the component
//service encapsulates any communication w the server
//could do a single service with everything in it, or multiple services if you're using different endpoints
