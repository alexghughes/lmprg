import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as socketIo from 'socket.io';

import setRoutes from './routes';

import { Message } from './models';

import { SocketClass } from './controllers';

class Server {

  public static readonly PORT = 3000;
  public app: any;
  public routes: any;
  private server: any;
  private io: any;
  private dotenv: any;
  private port: number;


  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
    this.setRoutes();
    this.mongoConnect();


  }

  private createApp(): void {
    this.app = express();

    this.app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header("Access-Control-Allow-Credentials", true);
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     next();
    });

    this.app.use('/', express.static(path.join(__dirname, '../public')));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));

  }

  private createServer(): void {
    this.server = http.createServer(this.app);

  }

  private mongoConnect(): void {
    this.dotenv = dotenv;
    this.dotenv.load({ path: '.env' });
    mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection;
    (<any>mongoose).Promise = global.Promise;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    })


  }

  private config(): void {
    this.port = process.env.PORT || Server.PORT;
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    let sockets = new SocketClass();
    sockets.init(this.io, this.port);

  }

  private setRoutes(): void {
   setRoutes(this.app);
  }




}

let server = Server.bootstrap();
export default server.app;
