import * as express from 'express';
import * as bodyParser from 'body-parser';

import NounCtrl from './controllers/noun';
import Noun from './models/noun';

import RuleCtrl  from './controllers/rule';
import Rule from './models/rule';


export default function setRoutes(app) {

  const nounCtrl = new NounCtrl();
  const ruleCtrl = new RuleCtrl();


  app.route('/api/nouns').get(nounCtrl.getAll);
  app.route('/api/noun').post(nounCtrl.insert);
  app.route('/api/nounstest').get(nounCtrl.getNounsTest);
  app.route('/api/send').post(nounCtrl.insert);

  app.route('/api/rules/:name').get(ruleCtrl.getRule);
}
