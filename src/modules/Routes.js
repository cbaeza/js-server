'use strict';
import helpers from './utils/helpers.js';
import UsersCtrl from './users/UsersCtrl.js';

export default class Routes {

	constructor(){
		this._routes = [];
		this._usersCtrl = new UsersCtrl();
		this.createRoutes();
	} // constructor

	createRoutes(){
		this._routes.push( 
			{ method: 'GET',
				routes:
				[
					{ route: '/users'		, handler: this._usersCtrl.users },
					{ route: '/user/:id'	, handler: this._usersCtrl.user }
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