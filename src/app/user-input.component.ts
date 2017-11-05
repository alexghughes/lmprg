
import { Component, OnInit } from '@angular/core';
import { Nouns } from './nouns';
import { Http } from '@angular/http';
//import { NOUNS } from './mock-nouns';
import { NounService } from './noun.service';
import { SocketService } from './socket.service';
import { keyframes } from '@angular/animations';
import {MatExpansionModule} from '@angular/material';

import { slideInOutAnimation } from './_animations/index';

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
  myModel:String;
  private ioConnection: any;

  constructor(private nounService: NounService, private http: Http, private socketService: SocketService, public panel: MatExpansionModule) { }

  ngOnInit(): void {
    // this.panelValue = true;
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

  openDiv(): void {
    console.log('hi');
    this.myModel = 'dfkdsdskldskl kldksllksdkldsdklsdsklds';
  }


  private initIoConnection(): void {

    //  this.panelValue = false;
    //this.panelValue = true;
    var $highlights = $('.highlights');
    var $toggle = $('#toggle');
    //var panel = document.getElementById('mypanel');
    //$( '#toggle' ).slideDown().addClass('visible');
    //var something =  new panel<void>()
    this.ioConnection = this.socketService.get().subscribe((returntext: any) => {
      this.myModel = '';
      console.log(returntext.rule);

      this.panelValue = true;
      //$( '#toggle' ).toggle( "slide" ).addClass('visible');
      //$( '#toggle' ).show("slide", { direction: "left" }, 500);
      //  $( '#toggle' ).fadeIn().addClass('visible');
      if ($('#toggle').hasClass('visible')) {
        $('#toggle').slideUp().removeClass('visible');
        $('#toggle').slideDown().addClass('visible');
        //  $( '#toggle' ).toggle( "slide" ).removeClass('visible');
        //  $( '#toggle' ).toggle( "slide" ).addClass('visible');
      } else {
        $('#toggle').slideDown().addClass('visible');
      }
      //$('#hello').hide('slide', {direction: 'left'}, 1000);
      //    $( '#toggle' ).toggle( "slide" );


      //$( "#toggle" ).slideUp();





      var panel = document.getElementById('panel');
      var panelHeader = document.getElementById('panel-header');
      var panelClass = document.getElementsByClassName('mat-expansion-panel-content');
      var panelIndicator = document.getElementsByClassName('mat-expansion-indicator');


      //       for(var x = 0; x < panelHeader.attributes.length; x++){
      //         if(panelHeader.attributes[x].name == 'aria-expanded'){
      //           panelHeader.attributes[x].value = 'true';
      //         }
      //        if(panelHeader.attributes[x].name == 'style'){
      //           panelHeader.attributes[x].value = 'height: 64px';
      //        }
      //        if(panelHeader.attributes[x].name == 'class'){
      //
      //        panelHeader.attributes[x].value = 'mat-expansion-panel-header ng-tns-c4-1 ng-trigger ng-trigger-expansionHeight mat-expanded';
      //        }
      //       };
      //
      // for(var x = 0; x < panelClass[0].attributes.length; x++){
      //   if(panelClass[0].attributes[x].name === 'class'){
      //     panelClass[0].attributes[x].value = 'mat-expansion-panel-content ng-trigger ng-trigger-bodyExpansion mat-expanded';
      //   };
      //
      //   if(panelClass[0].attributes[x].name === 'style'){
      //     if(panelClass[0].attributes[x].value !== 'visibility: visible;'){
      //       console.log(panelClass[0].attributes[x].value );
      //      // this.panelValue = false;
      //       checkOpen = false;
      //     }else{
      //       checkOpen = true;
      //       this.panelValue = true;
      //
      //     setTimeout(function(){this.panelValue = false; },1000)
      //
      //
      //     }
      //    // panelClass[0].attributes[x].value = 'visibility: visible';
      //   };
      //
      //   };
      //
      //
      //  for(var x = 0; x < panel.attributes.length; x++){
      //    if(panel.attributes[x].name === 'class'){
      //
      //      if(panel.attributes[x].value === 'mat-expansion-panel ng-tns-c3-0'){
      //        panel.attributes[x].value = 'mat-expansion-panel ng-tns-c3-0 mat-expanded';
      //      }
      //    };
      //  };

      //this.panelValue = true;
      var count = 0;
      var getPanelValue = this.panelValue;
      var myString = this.newword.substring(this.newword.lastIndexOf(" ") + 1);
      var myString2 = returntext.text;

      this.newword = this.newword.replace(/\w+[.!?]?$/, myString2);

      var passtojqueryfunction = this.newword;
      var $container = $('.container');
      var $backdrop = $('.backdrop');
      var $popup = $('.myPopup');

      var $textarea = $('textarea');
      var $toggle = $('button');
      var text = '';
      var backSpaceEvent = false;
      var revMark = reverse('<mark style="background-color:#FBFF2C; border-radius: 10px; ">&$</mark>');

      //$("#myMark").css("background-color", "yellow");
      // yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
      var ua = window.navigator.userAgent.toLowerCase();
      var isIE = !!ua.match(/msie|trident\/7|edge/);
      var isWinPhone = ua.indexOf('windows phone') !== -1;
      var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);
      var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);


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
        // var popup = document.getElementById("myPopup");

        if (!backSpaceEvent && index > 0 && index < 5) {

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


      function handleInput(s) {

        var text = $textarea.val();
        var eTop = $textarea.offset().top;

        //  $highlights.html('');
        var highlightedText = applyHighlights(text, s);
        // var containsQuestionMark = highlightedText.indexOf('<mark') > -1;
        //   var lastEight = highlightedText.substr(highlightedText.length - 8); // => "Tabs1"
        //   console.log(lastEight);
        //   console.log(lastEight == '</mark> ');
        //if(containsQuestionMark){

        $highlights.html(highlightedText);

        //   }

        // $highlights.fadeOut(800, function(){});
        var txtareaVal = $textarea.val().substring($textarea.val().lastIndexOf(" ") + 1);

        //  setTimeout(function(){

        count++;
        if (txtareaVal == myString) {

          //  this.panelValue = true;

          if (count === 1) {

            $highlights.animate({ opacity: 100 }, 0);

            $highlights.animate({ opacity: 0 }, 1000);


          }
        }
        //   this.panelValue = getPanelValue;
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


      //this.panelValue = true;




    });



  }



  // getText(): void {
  //
  //   this.nounService.send(this.nouns);
  //
  // }


}
