import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

interface SearchResults {
  id: number,
  name: string,
  about: string,
  distance: number | any,
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
  styleUrls: ['./jammer-profile.component.css']
  //how we're telling the component that userservice should be created directly from the class
})
export class JammerProfileComponent implements OnInit {

public founds: SearchResults[] = [{
  id: 0,
  name:"",
  about: "",
  distance: 0,
  picture_url: "",
  instruments: [],
  needs_instruments: [],
  genres: []
}]

public ids: any

public instruments: any

public genres: any

  constructor(private userService: UserService) { 
    //this adds userService obviously lol
    console.log('this.userserevice', this.userService)
  }

  // founds = FOUNDJAMMERS.data[0].results.found_users;

  ngOnInit(): void {
    this.userService.searchedUserEmitter.subscribe((data: any) => {
      console.log('search results', data)
      this.founds = []
      for(let i = 0; i< data.length; i++){
        this.founds.push({
          ...data[i].attributes,
          instruments: data[i].attributes.instruments.map((instrument:any) => instrument.name),
          genres: data[i].attributes.genres.map((genre:any) => genre.name)
        });
      };
    })

    this.userService.getJammers().subscribe((data: any) => {
      console.log('all user search results', data)
      this.founds = []
      this.ids = []
      for(let i = 0; i< data.data.length; i++){
        this.founds.push({
          ...data.data[i].attributes,
          instruments: data.data[i].attributes.instruments.map((instrument:any) => instrument.name),
          genres: data.data[i].attributes.genres.map((genre:any) => genre.name)
        });
        this.ids.push(
        data.data[i].id
        )
      };
      console.log(this.ids)
    })
    console.log('searcheduseremitter', this.userService.searchedUserEmitter)
  }
addUser(id: any) {
  this.userService.sendRequest(id).subscribe((data: any) => {
    console.log('jam request: ', data)
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