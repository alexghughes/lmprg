import * as mongoose from 'mongoose';
import Noun from '../models/noun';


export class SocketClass {

  socketInstance: any;
  noun = Noun;
  text: String;


  init = (io, port) => {

    io.on('connect', (socket:any) => {
      console.log('connected client on port %s.', port);
      socket.on('text', (text) => {
        this.text = JSON.stringify(text);
      // console.log('[server](text): %s', JSON.stringify(text));
        this.compareText();
        this.sendNoun();
        //  this.io.emit('text',text);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });

  }

  compareText = () => {
    let tokenizer: string[] = this.text.split(/\s+/);
    console.log(tokenizer);
    //loop through each item in array.
    //find and return with mongo function
    //add a loop count that goes up array each time like count += currentChunkOfText
    //check if male noun and begins with vowel
    this.noun.find({}, (err, docs) => {
    if (err) { return console.error(err); }
     //console.log(docs);
  });

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
