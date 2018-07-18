import { Component, OnChanges, Input, trigger, state, animate, transition, style, keyframes} from '@angular/core';

@Component({
  selector: 'my-grower',
  templateUrl: './grower.component.html',
  styleUrls: ['./grower.component.css'],
  animations: [
    trigger('growTrigger', [
      state('block', style({transform: 'scale(1)'})),
      state('none', style({transform: 'scale(0)'})),
      transition('none=>block', animate('100ms ease-in'))
    ])
  ]
})

export class GrowerComponent implements OnChanges {

  @Input() display : string = 'block';
  visibility: string;

  ngOnChanges() {
    this.visibility = this.display ? 'block' : 'none';
  }

}
