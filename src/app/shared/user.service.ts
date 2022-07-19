import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post("https://nodejs-food-hub.herokuapp.com/login", data);
  }

  signup(data: any) {
    return this.http.post("https://nodejs-food-hub.herokuapp.com/register", data);
  }
}
