import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from './message.model';

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

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public sendIoMessage(text): void {
    this.socket.emit('text', text);
  }


  public get() {
    let observable = new Observable(observer => {
      this.socket.on('returnmessage', (data) => {
        observer.next(data);
      });
      return () => {
      this.socket.disconnect();
    };
  });
  return observable;
  }
}
