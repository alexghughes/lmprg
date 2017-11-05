import * as mongoose from 'mongoose';
import Noun from '../models/noun';
import { Observable } from 'rxjs/Observable';


export class SocketClass {

  socketInstance: any;
  noun = Noun;
  text: String;
  returnmessage: String;
  io: any;

  init = (io, port) => {
    this.io = io;
    this.io.on('connect', (socket:any) => {
      console.log('connected client on port %s.', port);
      socket.on('text', (text) => {
        this.text = JSON.stringify(text);

      // console.log('[server](text): %s', JSON.stringify(text));
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
    this.text = this.text.replace(/['"]+/g, '');
    this.text = this.text.replace(/\\n/g, ' ');

    let tokenizer = this.text.split(' ');

    let returnMsg = '';
    let passIo = this.io;
    let arr = [];
    let lastWord = getLastWord(tokenizer);
    lastWord = lastWord.replace(/['"]+/g, '');

      function getLastWord(words) {

        return words[words.length - 1];
      }




    this.noun.findOne({$text: {$search:lastWord} }, (err, docs) => {
      if (err) { return console.error(err); }

      }).then(function(res){
        if(res){

          let myword = res["word"];
          let gender = res["gender"];


          let vowels = ["a","e","i","o","u"];
          let regex = /\b[aeiouAEIOU]/g;
          let vowelCheck = regex.test(myword);

          if(myword == lastWord && vowelCheck && gender == 'male'){

            var secondLastWord = tokenizer[tokenizer.length-2];

            if(secondLastWord == 'an'){

              tokenizer[tokenizer.length-1] = 't-' + tokenizer[tokenizer.length-1];

              returnMsg= tokenizer.join(' ');
              returnMsg = returnMsg.replace(/['"]+/g, '');
              returnMsg = returnMsg.substring(returnMsg.lastIndexOf(" ")+1);

                let rule = 'masc-noun-vowel';
              let returnObj = {'text': returnMsg, 'rule': rule};

              passIo.emit('returnmessage', returnObj);

            }
          }
        }

      })







  }





}
