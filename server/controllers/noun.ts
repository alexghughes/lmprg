import Noun from '../models/noun';



export default class NounCtrl{
  model = Noun;
  noun = Noun;
  text: String;

  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      console.log('hello');
      if (err) { return console.error(err); }
      res.json(docs);
    })
  }

  insert = (req, res) => {
    let text = req.body.noun;
    let returnMsg = '';
    let tokenizer = text.split(' ');

    let secondLastWord = tokenizer[tokenizer.length - 2];

    let lastWord = tokenizer[tokenizer.length-1];

    if (lastWord == '') {
      lastWord = secondLastWord + ' ';
    }

    lastWord = lastWord.toLowerCase();

    this.noun.findOne({"default": lastWord}, (err, docs) => {
      if (err) { return console.error(err); }
    }).then(function(result) {

      if(result){

        let myword = res["default"];
        let gender = res["gender"];

        let regex = /\b[aeiouAEIOU]/g;
        //let removeFadas = cleanUpSpecialChars(myword);
        let vowelCheck = regex.test(myword);
        //result not equal to null
        var thirdLastWord = tokenizer[tokenizer.length - 3];
        var checkthirdlastWord = thirdLastWord.replace(/['"]+/g, '');
        if (thirdLastWord == 'an' || thirdLastWord == '"an' || thirdLastWord == '"An' || thirdLastWord == 'An') {

          tokenizer[tokenizer.length - 2] = 't-' + tokenizer[tokenizer.length - 2];
          returnMsg = tokenizer.pop();
          returnMsg = tokenizer.join(' ');
          returnMsg = returnMsg.replace(/['"]+/g, '');

          returnMsg = returnMsg.substring(returnMsg.lastIndexOf(' '));
          returnMsg = returnMsg.substr(1);

          let rule = 'masc-noun-vowel';
          let returnObj = { 'text': returnMsg, 'rule': rule };
          console.log(returnMsg);
        //  socket.emit('returnmessage', returnObj);

        }

      res.json('okay');

    }else{
      //result is null
      res.json('okay');
    }

    })

    function cleanUpSpecialChars (str) {
      str = str.replace(/[Á]/g, "A");
      str = str.replace(/[á]/g, "a");
      str = str.replace(/[É]/g, "E");
      str = str.replace(/[Ú]/g, "U");
      str = str.replace(/[ú]/g, "u");
      str = str.replace(/[ú]/g, "u");
      return str;
    }



  }


  getNounsTest = (req, res) => {
    this.model.find({}, (err, docs) =>{
      if(err) { return console.log(err); }
      //console.log('hello');
      res.json(docs);
    })
  }

//   sendNoun = (req, res) => {
//   console.log('eq');
//
//   // obj.save((err, item) => {
//   //   // 11000 is the code for duplicate key error
//   //   if (err && err.code === 11000) {
//   //     res.sendStatus(400);
//   //   }
//   //   if (err) {
//   //     return console.error(err);
//   //   }
//   //   res.status(200).json(item);
//   // });
// }


//   sendNoun = (req, res) => {
//     console.log(req.body);
//       this.model2.find({}, (err, docs) =>{
//          if(err) { return console.log(err); }
//
//         res.json(docs);
//     //  })
//   })
// }

}
