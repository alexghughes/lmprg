import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/users">Users</a>
  <a routerLink="/input">Input</a>
  <a routerLink="/nouns">Nouns</a>
  <a routerLink="/message">Message</a>
   <router-outlet></router-outlet>

  `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Lampróg';

}
