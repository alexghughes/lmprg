import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Usaideoir } from './usaideoir';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { UserService }  from './user.service';
//component decorator provides metadata for the component
@Component({
  //The CSS selector name
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.css' ]


})

export class UserProfileComponent implements OnInit{
 usaideoir: Usaideoir;

 constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.route.params
     .switchMap((params: Params) => this.userService.getUser(+params['id']))
     .subscribe(usaideoir => this.usaideoir = usaideoir);
 }

 goBack(): void {
  this.location.back();
}

}
