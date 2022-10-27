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
    return this.http.get(`http://letusjam.herokuapp.com/api/v1/users/4/search?`);
  }

  getUserProfile() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/4/');
  }

  getIncomingJammerProfiles() {
    return this.http.get('http://letusjam.herokuapp.com/api/v1/users/4/connections/');
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
    this.http.get(`http://letusjam.herokuapp.com/api/v1/users/4/search?${params}`).subscribe({
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
   return this.http.patch<any>(`https://letusjam.herokuapp.com/api/v1/users/4/connections/${id}/`, 
     {
       "status": "APPROVED"
     })
}

 sendRequest(id: any) {
     return this.http.post<any>(`https://letusjam.herokuapp.com/api/v1/users/4/connections/${id}`, '')
  }

}