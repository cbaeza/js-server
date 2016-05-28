'use strict';
import helpers from '../utils/helpers.js';

/**
* Model for users
**/
export default class UsersMdl{

	constructor(){
		this._users = [
			{ id: 1, name:'Carlos',	surname: 'Baeza'},
			{ id: 2, name:'Claudio',surname: 'Martinez'},
			{ id: 3, name:'Pupi', 	surname: 'Baeza Rötzsch'},
			{ id: 4, name:'Franzi', surname: 'Rötzsch'},
			{ id: 5, name:'Franca', surname: 'Baeza Rötzsch'},
			{ id: 6, name:'Karen', 	surname: 'Gomez'}
		];
	}

	get allUsers(){
		return this._users;
	}
}