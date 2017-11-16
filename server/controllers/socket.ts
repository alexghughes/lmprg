import * as mongoose from 'mongoose';
import Noun from '../models/noun';
import { Observable } from 'rxjs/Observable';


export class SocketClass {

  socketInstance: any;
  noun = Noun;
  text: String;
  returnmessage: String;
  io: any;
  lastSpace: boolean;

  init = (io, port) => {
    this.io = io;
    this.io.on('connect', (socket:any) => {
      console.log('connected client on port %s.', port);
      socket.on('text', (text) => {

        this.text = JSON.stringify(text);

        this.compareText();
      //  io.emit('text',text);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });



    });

  }

  compareText = () => {
    let text = this.text;

  //  this.text = this.text.replace(/['"]+/g, '');
  //  this.text = this.text.replace(/\\n/g, ' ');

    let tokenizer = this.text.split(' ');
    //console.log(tokenizer);
    let returnMsg = '';
    let passIo = this.io;
    let arr = [];
    let secondLastWord = tokenizer[tokenizer.length - 2];

    let lastWord = getLastWord(tokenizer);

    if(lastWord == '"'){

      lastWord =  secondLastWord + ' ';
    }

     //lastWord = lastWord.replace(/['"]+/g, '');

      function getLastWord(words) {

        return words[words.length - 1];
      }
//console.log(lastWord);
  //console.log(lastWord);
 //console.log(lastWord);
  //  lastWord = "iolar ";
    this.noun.findOne({"default": lastWord}, (err, docs) => {
      if (err) { return console.error(err); }

    }).then(function(res){

        if(res){

          let myword = res["default"];
          let gender = res["gender"];

          let vowels = ["a","e","i","o","u","ú"];

          let regex = /\b[aeiouAEIOUáéíóúÁÉÍÓÚ]/g;
          let vowelCheck = regex.test(myword);

          if(myword == lastWord &&  vowelCheck && gender == 'masc'){

            var thirdLastWord = tokenizer[tokenizer.length-3];

            if(thirdLastWord == 'an'){

              tokenizer[tokenizer.length-2] = 't-' + tokenizer[tokenizer.length-2];
              returnMsg = tokenizer.pop();
              returnMsg= tokenizer.join(' ');
              returnMsg = returnMsg.replace(/['"]+/g, '');

              returnMsg = returnMsg.substring(returnMsg.lastIndexOf(' '));
              returnMsg = returnMsg.substr(1);

                let rule = 'masc-noun-vowel';
              let returnObj = {'text': returnMsg, 'rule': rule} ;
            
              passIo.emit('returnmessage', returnObj);

            }
          }
        }

      })









  }





}
