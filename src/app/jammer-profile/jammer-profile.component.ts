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
  }

  ngOnInit(): void {
    this.userService.searchedUserEmitter.subscribe((data: any) => {
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
    })
  }
addUser(id: any) {
  this.userService.sendRequest(id).subscribe((data: any) => {
  }) 
}
}