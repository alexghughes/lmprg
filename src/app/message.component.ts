import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './message.component.html',
  providers: [SocketService]
})

export class MessageComponent implements OnInit {
  private messages: Message[];
  private ioConnection: any;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.initModel();
    this.initIoConnection();
  }

  private initModel(): void {
    this.messages = [];
  }

  private initIoConnection(): void {
    this.ioConnection = this.socketService.get().subscribe((message: Message) => {
      this.messages.push(message);
      console.log(message);
    })
  }

}
