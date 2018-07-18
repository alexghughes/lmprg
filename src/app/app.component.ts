import { Component } from '@angular/core';
// <span><img src="./assets/lamprog3.png" alt="Lampróg" height="200" width="250"></span>
//
@Component({
  selector: 'my-app',
  template: `

  <mat-toolbar>
  <div id='myRoutes'>
  <span><a routerLink="/dashboard"><img class="router-links" src="./assets/ic_account_circle_black_48px.svg" alt="Lampróg" height="30" width="30"></a></span>
  <span><a routerLink="/input"><img class="router-links" src="./assets/ic_assignment_black_48px.svg" alt="Lampróg" height="30" width="30"></a></span>
  <!--<span><a routerLink="/users">Users</a></span>
  <span><a routerLink="/nouns">Nouns</a></span>
  <span><a routerLink="/message">Message</a></span>-->
  </div>

  <!-- This fills the remaining space of the current row -->

</mat-toolbar>

   <router-outlet></router-outlet>


  `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Lampróg';

}
