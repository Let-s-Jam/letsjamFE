import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getJammers() {
    return this.http.get('https://1d9a3efd-bdd5-4feb-baad-39d400f80776.mock.pstmn.io/api/v1/user/1/search?instrument=guitar');
  }

  getUserProfile() {
    return this.http.get('https://1d9a3efd-bdd5-4feb-baad-39d400f80776.mock.pstmn.io/api/v1/user/1');
  }

  getIncomingJammerProfiles() {
    return this.http.get('https://1d9a3efd-bdd5-4feb-baad-39d400f80776.mock.pstmn.io/api/v1/user/1/connections');
  }
  editProfile(value: any) {
   this.http.patch('https://1d9a3efd-bdd5-4feb-baad-39d400f80776.mock.pstmn.io/api/v1/user/1', {
      "attributes": value
   })
    //  .then(response => console.log(response))
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
