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

//we need to subscribe to the emitting component

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
    this.userService.searchedUserEmitter.subscribe((data: any) => {
      console.log('search results', data)
      this.founds = data
      this.instruments = data.instruments
      this.genres = data.genres
    })
    this.userService.getJammers().subscribe((data: any) => {
      console.log('all user search results', data)
      this.founds = data
      this.instruments = data.instruments
      this.genres = data.genres
    })
  }

  // data is the repsonse from the server

  //observables

  //found: foundJammers

}

//***
//public -> declare all the variables then declare another variable that is an array of those variables
//you will need to do an if statement to see if those contain a value, also you have to reset after every search
//we wil then iterate thru that array for every single one that has a value, add it to the end plus an ampersand
//we need a conditional to check if it's just one thing long it doesnt need the ampersand 
//***/









//use a service to inject into the component
//service encapsulates any communication w the server
//could do a single service with everything in it, or multiple services if you're using different endpoints

//v

//iterate thru array in the function that gathers values from the form
//for each of those, add a ${&instrument=${guitar}}

//store in an object so it has keys and values
// take those key and value pairs and create an array which we iterate thru

//multiple variables, instrument variable genre variable disyance wvariable and ame variable,
//we can add those variables into an array, for each thing if there is a value add it to the end of the string which becomes the uri



// getting the value from the form genre:${genreformvalue}
// conditional logic to see if each genre/instrument/etc. needs to be included because is has info
// ${instrument=saxophone}
// name=steve&instrument=sax