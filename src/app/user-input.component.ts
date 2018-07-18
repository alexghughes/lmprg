import { Component, OnInit } from '@angular/core';
import { Nouns } from './nouns';
import { Http } from '@angular/http';
import { NounService } from './noun.service';
import { RulesService } from './rules.service';
import { SocketService } from './socket.service';

import { ElementRef } from '@angular/core';

import $ from 'jquery';


@Component({
  selector: 'my-app',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']

})


export class UserInputComponent implements OnInit {
  nouns: Nouns[] = [];
  newnouns: Nouns[] = [];
  newword: any;
  panelValue: boolean;
  flag: boolean;
  rule: string;
  myModel: string;
  showappend:boolean = false;
  private ioConnection: any;

  constructor(private nounService: NounService, private http: Http, private socketService: SocketService, private rulesService: RulesService) { }

  ngOnInit(): void {
    // this.panelValue = true;
    this.nounService.getNounsTest().subscribe(res =>
      this.newnouns = res,
      err => {
        console.log(err);
      });

  //  this.initIoConnection();
  }


  openDialog(): void {
   //  let dialogRef = this.dialog.open(DialogComponent);
   // dialogRef.afterClosed().subscribe(result => {
   //  // this.selectedOption = result;
   // });
  }

  sendIoMessage(): void {
    //var myWord = this.newword.slice(-1);
    this.nounService.send(this.newword).subscribe(
      data => this.getResponse(data)
    );
    //this.socketService.sendIoMessage(this.newword);

  }

  openDiv(): void {
    let newRule = '';
    this.rulesService.getRule(this.rule).subscribe(
    //  data =>  this.toastr.success('Hello world!', 'Toastr fun!'),

      //this.myModel = data.text,
      error => console.log(error)

    );;
  }


  private getResponse(data): void {
    var $highlights = $('.highlights');
    var $toggle = $('#toggle');

    this.myModel = '';

    if(data.text === 'okay' || data.text === undefined){
      //do nothing
    }else{

    //   const toast = this.notificationsService.info(data.rule, 'Click to undo...', {
    //
    //   timeOut: 5000,
    //   showProgressBar: true,
    //   pauseOnHover: true,
    //   clickToClose: true,
    //   maxStack: 4
    // });


          this.panelValue = true;

          // if ($('#toggle').hasClass('visible')) {
          //       $('#toggle').slideUp().removeClass('visible');
          //       $('#toggle').slideDown().addClass('visible');
          // } else {
          //   $('#toggle').slideDown().addClass('visible');
          // }

          this.rule = data.rule;

          this.panelValue = true;

          var panel = document.getElementById('panel');
          var panelHeader = document.getElementById('panel-header');
          var panelClass = document.getElementsByClassName('mat-expansion-panel-content');
          var panelIndicator = document.getElementsByClassName('mat-expansion-indicator');

          var count = 0;
          var getPanelValue = this.panelValue;
          var myString = this.newword.slice(0, -1);
          myString = myString.substring(myString.lastIndexOf(" "));
          myString = myString.substr(1);

          //  myString = myString.substr(1);
          var myString2 = data.text;
          this.newword = this.newword.slice(0, -1);

          this.newword = this.newword.replace(/\w+[.!?]?$/, myString2);
          let changedWord = this.newword.substring(this.newword.lastIndexOf(" "));
          if (changedWord.charAt(1) !== 't') {
            this.newword = this.newword.substr(0, this.newword.lastIndexOf(changedWord));
            this.newword = this.newword + " " + myString2;
          }
          this.newword = this.newword + " ";

          var passtojqueryfunction = this.newword;
          var $container = $('.container');
          var $backdrop = $('.backdrop');
          var $popup = $('.myPopup');

          var $textarea = $('textarea');
          var $toggle = $('button');
          var text = '';
          var backSpaceEvent = false;


          var revMark = reverse('<mark id="marky" style="background-color:#FBFF2C; border-radius: 10px; ">&$</mark>');
          var marky = null;
          var offsetmark = null;



        //  revMark.offsetTop;
          var ua = window.navigator.userAgent.toLowerCase();
          var isIE = !!ua.match(/msie|trident\/7|edge/);
          var isWinPhone = ua.indexOf('windows phone') !== -1;
          var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);
          var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);

          // var rect = document.getElementById('txtarea').getBoundingClientRect();
          // console.log(rect.top, rect.right, rect.bottom, rect.left);



          if (isIOS) {
            fixIOS();
          }

          $(document).ready(function() {

            bindEvents();
            handleScroll();
            handleInput(myString2);

          });

          $(document).keypress(function(event) {
              var keycode = event.keyCode || event.which;
              if(keycode == '13' || keycode == '8') {
                backSpaceEvent = true;
              }
          });
     } //end else
     function handleInput(s) {

       var text = $textarea.val();
       var eTop = $textarea.offset().top;

       var highlightedText = applyHighlights(text, s);

       $highlights.html(highlightedText);


       txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);
       count++;


       if (count === 1) {

         $highlights.animate({ opacity: 2000 }, 0);
         $highlights.animate({ opacity: 0 }, 2000);


       }



       marky  = document.getElementById('marky');
       if(marky !== null){
       offsetmark = marky.getBoundingClientRect();


       var bodyRect = document.body.getBoundingClientRect();
       var markyRect = marky.getBoundingClientRect();
       var myoffsettop = markyRect.top - bodyRect.top;
       var myoffsetleft = markyRect.left - bodyRect.left;
       myoffsettop = myoffsettop - 30;
      //  myoffsetleft = myoffsetleft + 10;


     }
       if(count===1){
       $("#append").css({'display':'block'});
       $("#append").css({top: myoffsettop, left: myoffsetleft, position: "absolute"});
       setTimeout(function(){
         $("#append").css({'display':'none'});
       },10000)
     }


     }

     function handleScroll() {
       // var enterKeyPress = false;



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

     }

     function reverse(s) {
       var o = '';
       for (var i = s.length - 1; i >= 0; i--)
         o += s[i];
       return o;
     }

     function applyHighlights(text, s) {

       var rev = reverse(text);

       rev = rev.substr(1);

       var firstWord = rev.substr(0, rev.indexOf(" "));

       var revString = reverse(myString);

       var strngRev = reverse(myString2);

       var index = rev.indexOf(strngRev);

       if (!backSpaceEvent && index >= 0 && index < 5) {

         rev = rev.replace(strngRev, revMark);


       }

       rev = reverse(rev);

       text = rev;



       $('html').keyup(function(e) {
         if (e.keyCode == 8) {
           backSpaceEvent = true;
         }
       });

       return text;
     }


  }

//  private initIoConnection(): void {



//     this.ioConnection = this.socketService.get().subscribe((returntext: any) => {
// //this.toastr.info('Hello world!', 'Toastr fun!')
//       const toast = this.notificationsService.info(returntext.rule, 'Click to undo...', {
//
//       timeOut: 5000,
//       showProgressBar: true,
//       pauseOnHover: true,
//       clickToClose: true,
//       maxStack: 4
//     });
//       this.myModel = '';
//
//       this.panelValue = true;
//       //
//       // if ($('#toggle').hasClass('visible')) {
//       //       $('#toggle').slideUp().removeClass('visible');
//       //       $('#toggle').slideDown().addClass('visible');
//       // } else {
//       //   $('#toggle').slideDown().addClass('visible');
//       // }
//
//       this.rule = returntext.rule;
//
//       this.panelValue = true;
//
//       var panel = document.getElementById('panel');
//       var panelHeader = document.getElementById('panel-header');
//       var panelClass = document.getElementsByClassName('mat-expansion-panel-content');
//       var panelIndicator = document.getElementsByClassName('mat-expansion-indicator');
//
//       var count = 0;
//       var getPanelValue = this.panelValue;
//       var myString = this.newword.slice(0, -1);
//       myString = myString.substring(myString.lastIndexOf(" "));
//       myString = myString.substr(1);
//
//       //  myString = myString.substr(1);
//       var myString2 = returntext.text;
//       this.newword = this.newword.slice(0, -1);
//
//       this.newword = this.newword.replace(/\w+[.!?]?$/, myString2);
//       let changedWord = this.newword.substring(this.newword.lastIndexOf(" "));
//       if (changedWord.charAt(1) !== 't') {
//         this.newword = this.newword.substr(0, this.newword.lastIndexOf(changedWord));
//         this.newword = this.newword + " " + myString2;
//       }
//       this.newword = this.newword + " ";
//
//       var passtojqueryfunction = this.newword;
//       var $container = $('.container');
//       var $backdrop = $('.backdrop');
//       var $popup = $('.myPopup');
//
//       var $textarea = $('textarea');
//       var $toggle = $('button');
//       var text = '';
//       var backSpaceEvent = false;
//
//
//       var revMark = reverse('<mark style="background-color:#FBFF2C; border-radius: 10px; ">&$</mark>');
//
//       var ua = window.navigator.userAgent.toLowerCase();
//       var isIE = !!ua.match(/msie|trident\/7|edge/);
//       var isWinPhone = ua.indexOf('windows phone') !== -1;
//       var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);
//       var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);
//       // var rect = document.getElementById('txtarea').getBoundingClientRect();
//       // console.log(rect.top, rect.right, rect.bottom, rect.left);
//
//       function reverse(s) {
//         var o = '';
//         for (var i = s.length - 1; i >= 0; i--)
//           o += s[i];
//         return o;
//       }
//
//       function applyHighlights(text, s) {
//
//         var rev = reverse(text);
//
//         rev = rev.substr(1);
//
//         var firstWord = rev.substr(0, rev.indexOf(" "));
//
//         var revString = reverse(myString);
//
//         var strngRev = reverse(myString2);
//
//         var index = rev.indexOf(strngRev);
//
//         if (!backSpaceEvent && index >= 0 && index < 5) {
//
//           rev = rev.replace(strngRev, revMark);
//
//
//         }
//
//         rev = reverse(rev);
//
//         text = rev;
//
//         $('html').keyup(function(e) {
//           if (e.keyCode == 8) {
//             backSpaceEvent = true;
//           }
//         });
//
//         return text;
//       }
//
//
//       function handleInput(s) {
//
//         var text = $textarea.val();
//         var eTop = $textarea.offset().top;
//
//         var highlightedText = applyHighlights(text, s);
//
//         $highlights.html(highlightedText);
//
//
//         txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);
//
//         count++;
//
//
//         if (count === 1) {
//
//           $highlights.animate({ opacity: 2000 }, 0);
//           $highlights.animate({ opacity: 0 }, 2000);
//
//
//         }
//
//
//       }
//
//       function handleScroll() {
//         // var enterKeyPress = false;
//
//
//
//         var scrollTop = $textarea.scrollTop();
//         $backdrop.scrollTop(scrollTop);
//
//
//         var scrollLeft = $textarea.scrollLeft();
//         $backdrop.scrollLeft(scrollLeft);
//
//
//      }
//
//       function fixIOS() {
//         // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
//         $highlights.css({
//           'padding-left': '+=3px',
//           'padding-right': '+=3px',
//
//         });
//       }
//
//       function bindEvents() {
//         $textarea.on({
//           'input': handleInput,
//           'scroll': handleScroll
//         });
//
//       }
//
//
//
//       if (isIOS) {
//         fixIOS();
//       }
//
//       $(document).ready(function() {
//
//         bindEvents();
//         handleScroll();
//         handleInput(myString2);
//
//       });
//
//       $(document).keypress(function(event) {
//           var keycode = event.keyCode || event.which;
//           if(keycode == '13' || keycode == '8') {
//             backSpaceEvent = true;
//           }
//       });
//
//     });

//  }

}
