import { Component, OnInit } from '@angular/core';
import { Nouns } from './nouns';
import { Http } from '@angular/http';
//import { NOUNS } from './mock-nouns';
import { NounService } from './noun.service';
import { SocketService } from './socket.service';


@Component({
  selector: 'my-app',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']

})


export class UserInputComponent implements OnInit {
  nouns: Nouns[] = [];
  newnouns:Nouns[] = [];
  newword:any;
  private ioConnection: any;

   constructor(private nounService: NounService, private http: Http, private socketService: SocketService) { }

   ngOnInit(): void {
     this.nounService.getNounsTest().subscribe(res =>
          this.newnouns = res,
            err => {
                  console.log(err);
                   });

     this.initIoConnection();
    }

    getText() {

  //  this.nounService.send(this.newword).subscribe(
    //  res => {
      //  const newCat = res.json();
      //  this.cats.push(newCat);
      //  this.addCatForm.reset();
      //  this.toast.setMessage('item added successfully.', 'success');
    //  },
    //  error => console.log(error)
//    );
  }

   sendIoMessage(): void {

     this.socketService.sendIoMessage(this.newword);
   }

   private initIoConnection(): void {
     this.ioConnection = this.socketService.get().subscribe((text: String) => {
       this.newword = text;
     });
   }

    // getText(): void {
    //
    //   this.nounService.send(this.nouns);
    //
    // }


}
