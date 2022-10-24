import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user-service';

interface User {
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
interface Instruments {
  id: number,
  name: string
}
interface Genres {
  id: number,
  name: string
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Output() updateEdit = new EventEmitter<boolean>();

  public user: User =  {
  id: 0,
  name: "",
  display_email: "",
  about: "",
  zipcode: 0,
  picture_url: "",
  instruments: [],
  needs_instruments: [],
  genres: []
  }

  public instrument: any

  public genre: any

  constructor(private userService: UserService) { 

  }
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data: any) => {
      console.log('user profile', data)
      this.user = data.data.attributes
      this.instrument = data.data.attributes.instrument
      this.genre = data.data.attributes.genre
    })
  }
  switchView() {

    this.updateEdit.emit(true)
 }
}
