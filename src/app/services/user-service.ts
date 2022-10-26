import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Observable, ReplaySubject } from 'rxjs';
import { updatedUser } from '../user-edit/user-edit.component';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public searchedUserEmitter: ReplaySubject<any[]>;

  constructor(private http: HttpClient) { 
    this.searchedUserEmitter = new ReplaySubject<any[]>(1)
    this.searchedUserEmitter.subscribe((data: any) => {
      console.log('search results', data)
    })
    console.log('this label from userservice', this)
  }


  getJammers() {
    return this.http.get(`http://letusjam.herokuapp.com/api/v1/users/3/search?`);
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
    this.http.get(`http://letusjam.herokuapp.com/api/v1/users/3/search?${params}`).subscribe({
      next: (returnedJammers: any) => {
        const searchedJammersArray = returnedJammers.data
        this.searchedUserEmitter.next(searchedJammersArray)
        console.log('label', returnedJammers);
      },
      error: err => {
        console.log('error occurred in http request for autoresponses:');
        console.log(err);
        console.log('err.message:');
        console.log(err.message);
      }
    })
 }

 acceptRequest(id: number) {
     Headers: new HttpHeaders({
       "Content-Type": "application/json",
       "Accept": "application/json",
     })
 
   return this.http.patch<any>(`https://letusjam.herokuapp.com/api/v1/users/3/connections/${id}/`, 
     {
       "status": "APPROVED"
     })
}

 //make sure the data coming back from the emitter is compatible with founds

 

 //subscribe to the reuest 
 //from jammers emit the updated list
 //

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