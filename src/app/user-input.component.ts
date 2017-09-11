
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
var flag = true;
var myString = this.newword.substring(this.newword.lastIndexOf(" ")+1);
var myString2 = returntext.substring(returntext.lastIndexOf(" ")+1);

//this.newword = this.newword.substring(0, myString);
this.newword = this.newword.replace(/\w+[.!?]?$/,myString2);



var $container = $('.container');
var $backdrop = $('.backdrop');
var $highlights = $('.highlights');
var $textarea = $('textarea');
var $toggle = $('button');

// yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

function applyHighlights(text) {
//console.log(myString);
  console.log(flag);
if(flag){
  text = text
    .replace(/\n$/g, '\n\n')
    .replace(/\w+[.!?]?$/, '<mark>$&</mark>');
}
  if (isIE) {
    // IE wraps whitespace differently in a div vs textarea, this fixes it
    text = text.replace(/ /g, ' <wbr>');
  }

  return text;
}

function handleInput() {

  var text = $textarea.val();
  var highlightedText = applyHighlights(text);
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
handleInput();
flag = false;
     });

   }



    // getText(): void {
    //
    //   this.nounService.send(this.nouns);
    //
    // }


}
