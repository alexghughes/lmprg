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

}
