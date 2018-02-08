import { Injectable } from '@angular/core';
import { Nouns } from './nouns';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SocketService } from './socket.service'

import 'rxjs/add/operator/map';


@Injectable()
export class NounService {
   //private json = JSON.stringify({var1: 'test'});
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //private params = 'json=' + this.json;
  private options = new RequestOptions({ headers: this.headers });
  private nounsUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getNouns(): Observable<any> {
    return this.http.get(this.nounsUrl + 'api/nouns').map(res=> res.json());
  }

  getNounsTest(): Observable<any> {
    return this.http.get(this.nounsUrl + '/api/nounstest').map(res=> res.json());

  }

//   send(noun: Nouns[]): Promise<Nouns[]> {
//   const url = this.nounsUrl + '/api/send';
//   return this.http
//     .post(url, JSON.stringify(noun))
//     .toPromise()
//     .then(() => noun)
//     .catch(this.handleError);
// }

send(noun): Observable<any> {
  var params = 'json=' + noun;
    return this.http.post('http://localhost:8080/api/send', params, {
      headers: this.headers
    }).map(res => res.json);
  }




//  getWords(): Promise<Nouns[]> {
//    return Promise.resolve(NOUNS);
//  } //method stub
//
//
// getWord(word: string): Promise<Nouns> {
//
//   return this.getWords()
//              .then(nouns => nouns.find(nouns => nouns.word === word));
// }

}
