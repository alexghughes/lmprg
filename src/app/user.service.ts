import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';

@Injectable()

export class UserService {

  private url = 'http://localhost:3000';

  constructor(private http: Http) { }

  create(user: User) {

    return this.http.post(this.url + '/api/users/register', user);
  }

  login(username: string, password: string){
    return this.http.post(this.url + '/api/users/authenticate', {username: username, password: password})
    .map(user => {
      console.log(user);
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user["_body"]));
      }
      return user;
    });
  }

}
