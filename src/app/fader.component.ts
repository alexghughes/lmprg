import { Component, OnChanges, Input, trigger,state, animate,transition,style} from '@angular/core';

@Component({
  selector: 'my-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.css'],
  animations: [
    trigger('visibilityChanged', [
    state('shown', style({opacity: 1})),
    state('hidden', style({opacity:0})),
    transition('* => *', animate('.5s'))
    ])
  ]
})

export class FaderComponent implements OnChanges {

  @Input() isVisible : boolean = true;
  visibility = 'shown';

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
