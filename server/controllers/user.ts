import User from '../models/user';
import * as Q  from "q";
import * as bcrypt from 'bcryptjs';
import * as _ from "lodash";

export default class UserCtrl {

  model = User;

  register = (req,res) => {
    console.log(req.body);

    let deferred = Q.defer();

     let user = _.omit(req.body, 'password');

     user.password = bcrypt.hashSync(req.body.password, 10);

     const obj = new this.model(user);

     obj.save((err, item) => {
     // 11000 is the code for duplicate key error
     if (err && err.code === 11000) {
       res.sendStatus(400);
     }
     if (err) {
       return console.error(err);
     }
     console.log(item);
     res.status(200).json(item);
   });

  }
}
