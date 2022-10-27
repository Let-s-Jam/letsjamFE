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
    })
  }


  getJammers() {
    return this.http.get(`https://letusjam.herokuapp.com/api/v1/users/3/search?`);
  }

  getUserProfile() {
    return this.http.get('https://letusjam.herokuapp.com/api/v1/users/3/');
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
    return this.http.patch<any>('https://letusjam.herokuapp.com/api/v1/users/3/', user, options)
 }

 sendJammerSearchParams(params: string) {
    this.http.get(`https://letusjam.herokuapp.com/api/v1/users/3/search?${params}`).subscribe({
      next: (returnedJammers: any) => {
        const searchedJammersArray = returnedJammers.data
        this.searchedUserEmitter.next(searchedJammersArray)
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
   return this.http.patch<any>(`https://letusjam.herokuapp.com/api/v1/users/3/connections/${id}/`, 
     {
       "status": "APPROVED"
     })
}

 sendRequest(id: any) {
     return this.http.post<any>(`https://letusjam.herokuapp.com/api/v1/users/3/connections/${id}`, '')
  }

}