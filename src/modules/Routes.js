'use strict';
import helpers from './utils/helpers.js';
import UsersCtrl from './users/UsersCtrl.js';

export default class Routes {

	constructor(){
		this._routes = [];
		this.usersCtrl = new UsersCtrl();
		this.createRoutes();
	} // constructor

	createRoutes(){
		this.routes.push( 
			{ method: 'GET',
				routes:
				[
					{ route: '/', msg: 'Hello World !', res: JSON.stringify(this.usersCtrl.users)},
					{ route: '/1', msg: 'Hello World /1 !'}

				]
			}
		);
	} // createRoutes

	get routes(){
		return this._routes;
	}

	// set routes(routes){
	// 	this._routes = routes; 
	// }
}