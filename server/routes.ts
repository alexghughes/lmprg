import * as express from 'express';
import * as bodyParser from 'body-parser';

import NounCtrl from './controllers/noun';
import Noun from './models/noun';


export default function setRoutes(app) {

  const nounCtrl = new NounCtrl();


  app.route('/api/nouns').get(nounCtrl.getAll);
  app.route('/api/noun').post(nounCtrl.insert);
  app.route('/api/nounstest').get(nounCtrl.getNounsTest);
  app.route('/api/send').post(nounCtrl.insert);
}
