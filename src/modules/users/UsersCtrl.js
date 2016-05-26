'use strict';
import helpers from '../utils/helpers.js';
import UsersMdl from './UsersMdl.js';

/**
* Controller for users
**/
export default class UsersCtrl{

	constructor(){
		this.model = new UsersMdl();
	}

	get users(){
		return this.model.allUsers;
	}
}