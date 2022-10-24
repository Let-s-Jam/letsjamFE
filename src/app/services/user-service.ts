import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Observable } from 'rxjs';

@Injectable()


export class UserService {
  constructor(private http: HttpClient) { }

  getJammers() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/');
  }

  getUserProfile() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/1');
  }

  getIncomingJammerProfiles() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/1/connections');
  }

  updateProfile(user: object) {
      return this.http.patch('http://letusjam.herokuapp.com/api/v1/users/1', user,
      )
  }

 }
 

// userEdit$ = new Observable(observer => {
//   fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => response.json())
//     .then(userEdit => {
//       observer.next(userEdit);
//       observer.complete();
//     })
//     .catch(err => observer.error(err))
// });
// pikachu$ = new Observable(observer => {
//   fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => response.json())
//     .then(pikachu => {
//       observer.next(pikachu);
//       observer.complete();
//     })
//     .catch(err => observer.error(err))
// });




  //add another method like this for each request, after they fix the json we can remove the responsetype argument
  //in your component once you get data thats well structured 

  //understand dependency injections
  //understand how the userservice is getting injected
