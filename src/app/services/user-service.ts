import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getJammers() {
    return this.http.get('https://1d9a3efd-bdd5-4feb-baad-39d400f80776.mock.pstmn.io/api/v1/user/1/search?instrument=guitar');
    //backend needs to fix their json, they should use a validator
    //
  }

  //add another method like this for each request, after they fix the json we can remove the responsetype argument
  //in your component once you get data thats well structured 

  //understand dependency injections
  //understand how the userservice is getting injected
}