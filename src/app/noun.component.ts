import { Component, OnInit } from '@angular/core';
import { Nouns } from './nouns';
import { NounService } from './noun.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'noun-component',
  templateUrl: './noun.component.html',
  styleUrls: ['./noun.component.css']
})

export class NounComponent implements OnInit {

  newnouns: Nouns[] = [];
  noun: Nouns;
   constructor(private nounService: NounService) { }

   ngOnInit(): void {
       this.nounService.getNounsTest()
                          .subscribe(
                               res =>

                          this.newnouns = res

                               ,

                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

  }

}
