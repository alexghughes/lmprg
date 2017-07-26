import { Injectable } from '@angular/core';
import { Usaideoir } from './usaideoir';
import { USAIDEOIR } from './mock-usaideoir';

@Injectable()
export class UserService {
 getUsers(): Promise<Usaideoir[]> {
   return Promise.resolve(USAIDEOIR);
 } //method stub


getUser(id: number): Promise<Usaideoir> {

  return this.getUsers()
             .then(usaideoir => usaideoir.find(usaideoir => usaideoir.id === id));
}

}
