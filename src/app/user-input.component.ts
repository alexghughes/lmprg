
import { Component, OnInit } from '@angular/core';
import { Nouns } from './nouns';
import { Http } from '@angular/http';
//import { NOUNS } from './mock-nouns';
import { NounService } from './noun.service';
import { SocketService } from './socket.service';
import $ from 'jquery';


@Component({
  selector: 'my-app',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']

})


export class UserInputComponent implements OnInit {
  nouns: Nouns[] = [];
  newnouns:Nouns[] = [];
  newword:any;
  flag: boolean;
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
     this.ioConnection = this.socketService.get().subscribe((returntext: String) => {

       var myString = this.newword.substring(this.newword.lastIndexOf(" ")+1);
       var myString2 = returntext.substring(returntext.lastIndexOf(" ")+1);

//this.newword = this.newword.substring(0, myString);
       this.newword = this.newword.replace(/\w+[.!?]?$/,myString2);

       var passtojqueryfunction = this.newword;
       var $container = $('.container');
       var $backdrop = $('.backdrop');
       var $highlights = $('.highlights');
       var $textarea = $('textarea');
       var $toggle = $('button');
       var text = '';
       var backSpaceEvent = false;

       // yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
       var ua = window.navigator.userAgent.toLowerCase();
       var isIE = !!ua.match(/msie|trident\/7|edge/);
       var isWinPhone = ua.indexOf('windows phone') !== -1;
       var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);



       function applyHighlights(text, s) {


         function reverse(s) {
           var o = '';
           for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
            return o;
          }
       //console.log(myString);
         var index = text.lastIndexOf(myString2);
         var check = text;
         //console.log(index);

         var rev = reverse(text);

         var revMark = reverse('<mark style="background-color:#b1d5e5;">&$</mark>');

         var strngRev = reverse(myString2);
         if(!backSpaceEvent){
           rev = rev.replace(strngRev, revMark);
         }

          rev = reverse(rev);

          text = rev;

          $('html').keyup(function(e){
            if(e.keyCode == 8) {
              backSpaceEvent = true;
            }
          });


        //  text = text
        //    .replace(/\n$/g, '\n\n')
        //    .replace(myString2, '<mark>$&</mark>');
        //  //  .replace(/\w+[.!?]?$/, '<mark>$&</mark>');

         return text;
       }


       function handleInput(s) {

         var text = $textarea.val();
         var highlightedText = applyHighlights(text,s);
         $highlights.html(highlightedText);
       //  console.log(highlightedText);
       }

       function handleScroll() {
         var scrollTop = $textarea.scrollTop();
         $backdrop.scrollTop(scrollTop);

         var scrollLeft = $textarea.scrollLeft();
         $backdrop.scrollLeft(scrollLeft);
       }

       function fixIOS() {
         // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
         $highlights.css({
           'padding-left': '+=3px',
           'padding-right': '+=3px',

         });
       }

       function bindEvents() {
         $textarea.on({
           'input': handleInput,
           'scroll': handleScroll
         });

         $toggle.on('click', function() {
           $container.toggleClass('perspective');
         });
       }

       if (isIOS) {
         fixIOS();
       }

       bindEvents();
       handleInput(myString2);

     });






   }



    // getText(): void {
    //
    //   this.nounService.send(this.nouns);
    //
    // }


}
