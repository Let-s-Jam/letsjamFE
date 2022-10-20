import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-jammer-profile',
  templateUrl: './jammer-profile.component.html',
  styleUrls: ['./jammer-profile.component.css'],
  providers: [UserService]
  //how we're telling the component that userservice should be created directly from the class
})
export class JammerProfileComponent implements OnInit {

public founds: any 

  constructor(private userService: UserService) { 
    //this adds userService obviously lol
  }

  // founds = FOUNDJAMMERS.data[0].results.found_users;

  ngOnInit(): void {
    this.userService.getJammers().subscribe((data: any) => {
      console.log('search results', data)
      this.founds = data.data[0].results.found_users
    })
  }

  // data is the repsonse from the server

  //observables

  //found: foundJammers

}

//use a service to inject into the component
//service encapsulates any communication w the server
//could do a single service with everything in it, or multiple services if you're using different endpoints
