'use strict';
import helpers from '../utils/helpers.js';
import UsersMdl from './UsersMdl.js';

/**
* Controller for users
**/
export default class UsersCtrl{

	constructor(){
		this._model = new UsersMdl();
	}

	user(req, res){
		console.log(req.params.id);
		return res.send('user: ' + req.params.id);
	}

	users(req, res){
		// console.log(this._model.allUsers);
		return res.send('a lot of users');
	}
}