import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

let SERVER_URL = 'http://localhost:3000';

@Injectable()
export class SocketService {
  private socket;

  constructor() {
    this.initSocket();
  }

  private initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }


  public sendIoMessage(text): void {
    this.socket.emit('text', text);
  }


  public get() {
    let observable = new Observable(observer => {
      this.socket.on('returnmessage', (data) => {
      //  console.log(rule);
        observer.next(data);
      //  console.log(observer);
      });
      return () => {
        //something about it returning nothing
      //this.socket.disconnect();
    };
  });

  return observable;

  }
}
