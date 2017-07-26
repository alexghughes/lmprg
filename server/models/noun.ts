import * as mongoose from 'mongoose';

const nounSchema = new mongoose.Schema({
  word: String,
  gender: String
});

const Noun = mongoose.model('noun', nounSchema);


export default Noun;
