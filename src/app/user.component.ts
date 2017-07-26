import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usaideoir } from './usaideoir';
import { UserService } from './user.service';

@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
,
providers: [UserService]

  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
//Create a public property in AppComponent that exposes USAIDEOIR for binding.
  export class UserComponent implements OnInit {
    usaideoir: Usaideoir[];
    teibi: Usaideoir;

    constructor(
      private router: Router,
      private userService: UserService
    ) { }

    getUsers(): void {
      this.userService.getUsers().then(usaideoir => this.usaideoir = usaideoir);
    }

    ngOnInit(): void {
      this.getUsers();
    }
    onSelect(usaideoir : Usaideoir): void {
      this.teibi = usaideoir
    }

    gotoProfile(): void {

   this.router.navigate(['/profile', this.teibi.id]);
 }
  }
