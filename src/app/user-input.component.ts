
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
  var $highlights = $('.highlights');

     this.ioConnection = this.socketService.get().subscribe((returntext: String) => {
       console.log('in ioConnection');
       //$highlights.stop();
      // $highlights.removeAttr('style');
    //   var $highlights = $('.highlights');
      //  $highlights.fadeTo("slow", 0.1);

      //  $highlights = $('.highlights');
    //  $highlights.stop();


       var myString = this.newword.substring(this.newword.lastIndexOf(" ")+1);
       var myString2 = returntext;

       //this.newword = this.newword.substring(0, myString);
       this.newword = this.newword.replace(/\w+[.!?]?$/,myString2);


       var passtojqueryfunction = this.newword;
       var $container = $('.container');
       var $backdrop = $('.backdrop');

       var $textarea = $('textarea');
       var $toggle = $('button');
       var text = '';
       var backSpaceEvent = false;
       var revMark = reverse('<mark style="background-color:#feff60; border-radius: 25px; width: 200px">&$</mark>');
       //$("#myMark").css("background-color", "yellow");
       // yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
       var ua = window.navigator.userAgent.toLowerCase();
       var isIE = !!ua.match(/msie|trident\/7|edge/);
       var isWinPhone = ua.indexOf('windows phone') !== -1;
       var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);
         var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ")+1);

       function reverse(s) {
         var o = '';
         for (var i = s.length - 1; i >= 0; i--)
          o += s[i];
          return o;
        }

       function applyHighlights(text, s) {

         var rev = reverse(text);

         var firstWord = rev.substr(0, rev.indexOf(" "));

         var revString = reverse(myString);

         var strngRev = reverse(myString2);
         var index = rev.indexOf(strngRev);

         if(!backSpaceEvent && index > 0 && index < 2){

               rev = rev.replace(strngRev, revMark);


         // Something you want delayed.

         }

         rev = reverse(rev);

          text = rev;

          $('html').keyup(function(e){
            if(e.keyCode == 8) {
              backSpaceEvent = true;
            }
          });

         return text;
       }


       function handleInput(s) {

         var text = $textarea.val();
         var highlightedText = applyHighlights(text,s);

         $highlights.html(highlightedText);

        // $highlights.fadeOut(800, function(){});
        var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ")+1);

       var myString2 = returntext;
      //  setTimeout(function(){
         if(txtareaVal == myString){
           $highlights.animate({opacity: 100}, 0);
           setTimeout(function(){
             $highlights.animate({opacity: 0}, 1000);

           }, 0);
         }
      //  }, 500);

        // $('.highlights').load(location.href + '.backdrop');
        //   $highlights.fadeTo( "slow", 0.3, function() {});




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
