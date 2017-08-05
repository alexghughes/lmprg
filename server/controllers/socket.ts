import * as mongoose from 'mongoose';
import Noun from '../models/noun';
import { Observable } from 'rxjs/Observable';


export class SocketClass {

  socketInstance: any;
  noun = Noun;
  text: String;
  io: any;

  init = (io, port) => {
    this.io = io;
    this.io.on('connect', (socket:any) => {
      console.log('connected client on port %s.', port);
      socket.on('text', (text) => {
        this.text = JSON.stringify(text);
      // console.log('[server](text): %s', JSON.stringify(text));
        this.compareText();
        this.sendNoun();
        io.emit('text',text);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });



    });

  }

  compareText = () => {

  let tokenizer = this.text.split(/\s+/);

    // this.noun.find({$text:{$search:this.text} }, (err, docs) => {
    //   if (err) { return console.error(err); }
    //     console.log(docs);
    //   })

    let lastWord = getLastWord(tokenizer);


      function getLastWord(words) {

        return words[words.length - 1];
      }


    this.noun.find({$text: {$search:lastWord} }, (err, docs) => {
      if (err) { return console.error(err); }
        console.log(docs);

      })



      this.io.emit('returnmessage', this.text);
    //
    // socket.on('returntext', (text) => {
    // //  this.text = JSON.stringify(text);
    // // console.log('[server](text): %s', JSON.stringify(text));
    //
    //   socket.emit('text',text);
    // });

    //loop through each item in array.
    //find and return with mongo function
    //add a loop count that goes up array each time like count += currentChunkOfText
    //check if male noun and begins with vowel




  }

  changeThisIndex = (token) => {

     console.log(token);
}


    sendNoun = () => {

    //
    // this.obj.save((err, item) => {
    //   // 11000 is the code for duplicate key error
    //   //if (err && err.code === 11000) {
    //   //  res.sendStatus(400);
    // //  }
    //   if (err) {
    //     return console.error(err);
    //   }
    // //  res.status(200).json(item);
    // });
  }



}