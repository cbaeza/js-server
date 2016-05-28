'use strict';
import helpers from './utils/helpers.js';
import Routes from './Routes.js';

import bodyParser from 'body-parser';

export default class Server {

	constructor( app ){
		this._app = app;
		this.initApp();
		this.initRoutes();
		this.startApp();
	} // constructor

	initApp(){
		this._app.use(bodyParser.json()); // for parsing application/json
		this._app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	}

	initRoutes(){
		this._app.get('/', function (req, res) {
		 	res.send('Hello World from ES6, express and nodejs: ' + helpers.getDate());
		});

		let r = new Routes();

		r.routes.forEach( x => {
			if( x.method == 'GET' ){
				this.initGetRoutes(x.routes);
			}

			if( x.method == 'POST' ){
				this.initPostRoutes(x.routes);
			}
		});
	} // init

	initGetRoutes( r ){
		r.forEach( y => {
			console.log(y);
			this._app.get( y.route, function(req, res){ 
					return y.handler(req, res);
				});	
		});

	} // init GET routes

	initPostRoutes( r ){
		
	} // init POST routes

	startApp(){
		this._app.listen(3000, function () {
			console.log('Example app listening on port 3000!');
		});
	} // startApp
}
