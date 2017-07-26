import Noun from '../models/noun';



export default class NounCtrl{
  model = Noun;


  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      console.log('hello');
      if (err) { return console.error(err); }
      res.json(docs);
    })
  }

  insert = (req, res) => {
    console.log(req.body);
    const obj = new this.model(req.body);
  //  console.log(req);
    // obj.save((err, item) => {
    //   if(err && err.code === 11000){
    //     res.sendStatus(400);
    //   }
    //   if(err){
    //     return console.error(err);
    //   }
    //   res.status(200).json(item);
    // });
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
