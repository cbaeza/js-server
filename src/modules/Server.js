'use strict';
import helpers from './utils/helpers.js';
import Routes from './Routes.js';

export default class Server {

	constructor( app ){
		console.log('server started with gls ..');
		this.app = app;
		this.init();
	} // constructor

	init(){
		let routes = new Routes();
		for (let r of routes.routes ) {
			console.log(r);
			if( r.method == 'GET'){
				for(let route of r.routes ){
					this.app.get( route.route , 
						function(req, res){ 
							res.send( route.msg + route.res )
						});	
				}
			}
		};
		// this.app.get('/', function (req, res) {
		// 	res.send('config: Hello World form EC6, express and nodejs: ' + helpers.getDate() + '<b>'+helpers.getEnv() + '</b>');
		// });

		this.app.listen(3000, function () {
			console.log('Example app listening on port 3000!');
		});
	}
}
