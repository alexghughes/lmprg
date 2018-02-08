import{ Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'

})

export class UserComponent implements OnInit {
  @Input() name: string;

  constructor() {

  }

  ngOnInit() {

  }
}
