import { Component, AfterViewInit } from '@angular/core';
import { NounService } from './noun.service';

@Component({
  selector: 'nojquery-component',
  templateUrl: './nojquery.component.html',
  styleUrls: ['./nojquery.component.css']

})

export class NojqueryComponent implements AfterViewInit{

  text: string;
  highlightText: any;
  isVisible : boolean = false;

  constructor(private nounService: NounService) {}

  ngAfterViewInit(){
//  var textArea = <HTMLInputElement>document.getElementById('txtarea');

  //  console.log(textArea.value);
  }

   sendMessage(): void {
     this.nounService.send(this.text).subscribe(
       data => this.getResponse(data)
     )
   }

   getResponse(data): void {

     if(data.text !== 'okay' && data.text !== undefined){

       let changedWord = data.text;

       this.text = this.text.slice(0, -1);
       console.log(this.text);
    //   this.text = this.text.replace(/\w+[.!?]?$/, changedWord);

       var lastIndex = this.text.lastIndexOf(" ");
       this.text = this.text.substring(0, lastIndex);
       this.text = this.text + " " + changedWord;
       this.text = this.text + " ";

       //if word with fada returns with first vowel appended on and we need to remove that

       if (changedWord.charAt(0) !== 't') {
        //  console.log("here");
         this.text= this.text.substr(0, this.text.lastIndexOf(changedWord));
         console.log(this.text);
        // this.text = this.text + " " + changedWord;
       }

       let textArea = <HTMLInputElement>document.getElementById('txtarea');

       let textAreaValue = textArea.value.substring(textArea.value.lastIndexOf(" ") + 1);

       let spanElmt = <HTMLInputElement>document.getElementById('span');
       let highlights = <HTMLInputElement>document.getElementById('highlights');
       let backSpaceEvent = false;
       let revMark = reverse('<mark id="marky" style="background-color:#FBFF2C; border-radius: 10px; ">&$</mark>');

       this.highlightText = applyHighlights(this.text, changedWord, revMark);
       this.isVisible = true;

       setTimeout(()=>{
         //this.highlightText = '';
         this.isVisible = false;
       },1000);

     }

     function reverse(s: string) {
       var o = '';
       for (var i = s.length - 1; i >= 0; i--)
         o += s[i];
       return o;
     }

     function applyHighlights(textareaval: string, changedword: string, revmark: string){
       let rev =  reverse(textareaval);
       rev = rev.substr(1);
       let firstWord = rev.substr(0, rev.indexOf(" "));

       let strngRev = reverse(changedword);

       let getIndex = rev.indexOf(strngRev);

       rev = rev.replace(strngRev, revmark);

       rev = reverse(rev);

       return rev;
     }
   }

}
