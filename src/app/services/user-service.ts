import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Observable } from 'rxjs';
import { updatedUser } from '../user-edit/user-edit.component';
@Injectable()


export class UserService {
  constructor(private http: HttpClient) { }

  getJammers() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/');
  }

  getUserProfile() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/3/');
  }

  getIncomingJammerProfiles() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/3/connections/');
  }

  updateProfile(user: updatedUser) {
        const options =  {
          headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
    }
    return this.http.patch<any>('http://letusjam.herokuapp.com/api/v1/users/', user, options)
 }

 sendJammerSearchParams(params: string) {
   return this.http.get(`http://letusjam.herokuapp.com/api/v1/users/3/search?${params}`)
 }

 // /api/v1 / users /: user_id / search ? name = steve & instrument=sax
  // name = Emma & instrument=Piano& genre=Pop & distance=0 - 5


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
}