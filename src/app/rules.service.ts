import { Injectable } from '@angular/core';
import { Rules } from './rules';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RulesService{

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private options = new RequestOptions({ headers: this.headers });
  private url = 'http://localhost:3000';

  constructor(private http: Http) { }

  getRule(rule): Observable<any>{
    return this.http.get(this.url + `/api/rules/${rule}`).map(res => res.json());
  }


}
