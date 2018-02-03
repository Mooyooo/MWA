import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }
  getUserInfo() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
  }

}
