import { Component, OnInit } from '@angular/core';
import { Usaideoir } from './usaideoir';
import { UserService } from './user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  usaideoir: Usaideoir[] = [];

   constructor(private userService: UserService) { }

   ngOnInit(): void {
    this.userService.getUsers()
      .then(usaideoir => this.usaideoir = usaideoir);
  }
}
